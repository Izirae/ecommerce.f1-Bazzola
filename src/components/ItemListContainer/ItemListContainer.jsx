import { Box, HStack, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function ItemListContainer() {
	const [gearList, setGearList] = useState([]);
	const [loading, setLoading] = useState(true);
	let { idCat } = useParams();
	let { idSubcat } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const gear = collection(db, 'gear');

		if (idCat) {
			getDocs(gear).then((el) => {
				const auxGearList = el.docs.map((item) => ({ ...item.data(), id: item.id }));
				const auxCat = auxGearList.filter((product) => product.cat === idCat);
				setLoading(false);

				if (idSubcat) {
					const auxSubcat = auxCat.filter((product) => product.subcat === idSubcat);
					console.log(auxSubcat, 'subcat');
					setLoading(false);
				} else {
					setGearList(auxCat);
					setLoading(false);
				}
			});
		} else {
			getDocs(gear).then((el) => {
				const auxGearList = el.docs.map((item) => ({ ...item.data(), id: item.id }));
				setGearList(auxGearList);
				setLoading(false);
			});
		}
	}, [idCat, idSubcat]);

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
