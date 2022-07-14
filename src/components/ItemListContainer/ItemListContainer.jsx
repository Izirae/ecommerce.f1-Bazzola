import { Box, HStack, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function ItemListContainer() {
	const [gearList, setGearList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [catalog, setCatalog] = useState([]);
	let { idCat } = useParams();
	let { idSubcat } = useParams();
	

	useEffect(() => {
		async function getItems() {
			let auxArray = [];
			let aux;
			const db = getFirestore();
			const gear = collection(db, 'gear');
			let promise = getDocs(gear).then((el) => {
				el.docs.map((item) => {
					aux = { ...item.data(), id: item.id };
					auxArray = auxArray.concat(aux);
					return auxArray;
				});
				setCatalog(auxArray);
			});

			await promise;
		}

		getItems();
	
		let catFilter = catalog.filter((item) => item.cat === idCat);
		let subCatFilter = catFilter.filter((item) => item.subcat === idSubcat);
		// console.log(catFilter, subCatFilter)

		if (idCat === undefined) {
			setGearList(catalog);
			setLoading(false);
		} else if (idSubcat === undefined) {
			setGearList(catFilter);
			setLoading(false);
		} else {
			setGearList(subCatFilter);
			setLoading(false);
		}
	}, [idCat, idSubcat, catalog]);

	return loading ? (
		<HStack>
			<Spinner size="xl" /> <Text>Loading...</Text>
		</HStack>
	) : (
		<Box borderWidth="1px" borderRadius="lg" margin="auto" ml={2} mr={2}>
			<SimpleGrid minChildWidth="300px" spacing="18px" mt={10}>
				<ItemList gearList={gearList} />
			</SimpleGrid>
		</Box>
	);
}

export default ItemListContainer;
