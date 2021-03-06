import React, { useEffect, useState } from "react";
import { Text, Spinner, HStack, } from "@chakra-ui/react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {

	const [gearList, setGearList] = useState([]);
	const [loading, setLoading] = useState(true);
	let { idItem } = useParams()

	useEffect(() => {

		async function getItem() {
			const db = getFirestore();
			const product = doc(db, 'gear', idItem)

			let details = getDoc(product).then((det) => {
				setGearList({ ...det.data(), id: det.id })

			})

			await details
			setLoading(false)

		}
		getItem()

	}, [idItem])

	return (
		loading ? (
			<HStack>
				<Spinner size="xl" /> <Text>Loading...</Text>
			</HStack>
		) : (
			<ItemDetail gearList={gearList} />
		)
	)
}

export default ItemDetailContainer