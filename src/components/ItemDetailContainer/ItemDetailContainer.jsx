import React, { useEffect, useState } from "react";
import { Box, Text, Spinner, HStack } from "@chakra-ui/react";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({price, model, imgURL}) => {

    const [detailsList, setDetailsList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

        let details = "Ahora, la prenda emblemática de cualquier equipo de carreras puede ser tuya. Lleves lo que lleves, sin duda esto será lo que te hará destacar. El estilo, la precisión y el diseño de alta calidad se combinan para convertir este en el accesorio definitivo para cualquier aficionado a la Fórmula Uno."

		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(details);
			}, 2000);
		}).then((res) => {
			setDetailsList(res);
			setLoading(false);
		});
	}, []);

	return loading ? (
		<HStack>
			<Spinner size="xl" /> <Text>Loading...</Text>
		</HStack>
	) : (
		<Box>
		    <ItemDetail price={price} model={model} imgURL={imgURL} details={detailsList}/>
		</Box>
)
}

export default ItemDetailContainer