import { Box, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ msg }) {
	const [gearList, setGearList] = useState([]);
	const [loading, setLoading] = useState(true);
	let {idCat} = useParams();
	let {idSubcat} = useParams();

	useEffect(() => {
		let gear = [
			{
				id: "1",
				model: "Aston Martin F1 Cognizant - Gorra oficial del equipo",
				brand: "Aston Martin",
				price: 53,
				cat: "Aston Martin",
				subcat: "Accesorios",
				desc: [
					'95 % poliéster',
					'5 % Elastano',
					'Ala curva',
					'Etiqueta deportiva',
					'Cierre trasero regulable',
					'Gráficos impresos',
					'Con licencia oficial',
					'De importación',
				],
				imgURL:
					"https://images.footballfanatics.com/aston-martin/aston-martin-cognizant-f1-2022-official-team-cap-green_ss4_p-13302416+u-14isxzj3c9wg5rzfz8pq+v-0a963339052d415a868faca30efacf83.jpg?_hv=1&w=900",
			},
			{
				id: "2",
				model: "Camiseta Alfa Romeo Sauber",
				brand: "Alfa Romeo",
				price: 68,
				cat: "Alfa Romeo",
				subcat: "Ropa",
				desc: [
					'100 % poliéster reciclado',
					'Manga corta',
					'Cuello redondo',
					'Gráficos impresos',
					'Con licencia oficial',
					'De importación',
				],
				imgURL:
					"https://images.footballfanatics.com/alfa-romeo-racing/alfa-romeo-f1-team-orlen-2022-team-t-shirt_ss4_p-13303037+u-15drp20ro3gsjusw9mcu+v-b1e25c321c9b498e939b95e1d81fe655.jpg?_hv=1&w=340",
			},
			{
				id: "3",
				model: "Chaqueta de verano Scuderia Ferrari",
				brand: "Puma",
				price: 178,
				cat: "Ferrari",
				subcat: "Ropa",
				desc: [
					'100 % poliéster', 
					'Logotipo estampado', 
					'Cierre de cremallera', 
					'Paneles laterales', 
					'Ventilaciones en la axila',
					'Ribete en los puños'
				],
				imgURL:
					"https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2022-team-summer-jacket_ss4_p-13300701+u-1hyxawhxllsnp2jh7a87+v-adeec6a101bd4de59cf2503a14a4594d.jpg?_hv=1&w=900",
			},
			{
				id: "4",
				model: "Chaqueta híbrida Aston Martin F1 Cognizant - Mujer",
				brand: "Aston Martin",
				price: 225,
				cat: "Aston Martin",
				subcat: "Ropa",
				desc: [
					'Cuerpo: 100% nailon',
					'Paneles: 80% poliéster; 20% elastano',
					'Cremallera de recorrido completo',
					'Diseño acolchado',
					'Etiqueta deportiva',
					'Cuello alto',
					'Puños elásticos',
					'Gráficos impresos',
					'Con licencia oficial',
					'De importación',
				],
				imgURL:
					"https://images.footballfanatics.com/aston-martin/aston-martin-cognizant-f1-2022-official-team-hybrid-jacket-womens_ss4_p-12099165+u-17yzfqv6p1edbhlzhyhe+v-d55c8ac7a25c4153954540c29daa4a19.jpg?_hv=1&w=900",
			},
			{
				id: "5",
				model: "Camiseta Scuderia Ferrari - Mujer",
				brand: "Puma",
				price: 44,
				cat: "Ferrari",
				subcat: "Ropa",
				desc: [
					'100 % algodón',
					'Logotipo estampado'
				],
				imgURL:
					"https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-puma-small-shield-t-shirt-red-womens_ss4_p-12046119+u-1ebtia60oa9q2glf0t6s+v-d415f2048a2c436f9967604edd6ecfb8.jpg?_hv=1&w=900",
			},
			{
				id: "6",
				model: "Modelo Scuderia Ferrari 2021 - Carlos Sainz - Escala 1:43",
				brand: "Ferrari",
				price: 38,
				cat: "Ferrari",
				subcat: "Accesorios",
				desc: [
					'Muy detallado',
					'Escala 1:43',
					'Con licencia oficial',
					'Metal fundido a presión',
					'Plástico',
					'País de origen: Hong Kong'
				],
				imgURL:
					"https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2021-model-carlos-sainz-1:43-scale_ss4_p-12074980+u-g31uqdyxhld38j17r8pp+v-142e2011ae3b4e368b667038ebf42e36.jpg?_hv=1&w=900",
			},
			{
				id: "7",
				model: "Taza térmica mate Scuderia Ferrari",
				brand: "Ferrari",
				price: 32,
				cat: "Ferrari",
				subcat: "Accesorios",
				desc: [
					'Acero inoxidable',
					'Logotipo estampado'
				],
				imgURL:
					"https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-matte-thermal-mug_ss4_p-12046337+u-7hl8dwwoeduavyiytbqg+v-830b182941564d54b47cfe60bf69e03e.jpg?_hv=1&w=900",
			},
			{
				id: "8",
				model: "Pijama Fórmula 1 - Bebé",
				brand: "F1",
				price: 30,
				cat: "F1",
				subcat: "Ropa",
				desc: [
					'Tejido principal: 100% algodón',
					'Ribete del cuello: 96 % poliéster, 4 % elastano',
					'Logotipo cosido',
					'Gráficos impresos',
					'Con licencia oficial',
					'De importación',
				],
				imgURL:
					"https://images.footballfanatics.com/formula-1-merchandise/formula-1-boilersuit-sleepsuit-baby_ss4_p-12098565+u-pinojghmi51u3b0ysqyg+v-09ea5d58556f4e3d800c454dd08100df.jpg?_hv=1&w=900",
			},
			{
				id: "9",
				model: "Llavero de casco Ayrton Senna",
				brand: "F1",
				price: 12,
				cat: "F1",
				subcat: "Accesorios",
				desc: [
					'100 % acrílico',
					'País de origen: China'
				],
				imgURL:
					"https://images.footballfanatics.com/fullerton-flyers/ayrton-senna-helmet-keyring_ss4_p-12055677+u-ww7eahd36fuaes4xwzw8+v-e7ecf361a97241ee85d9f87290a6a7e6.jpg?_hv=1&w=900",
			},
		];

		let catFilter = gear.filter((item) => item.cat === idCat)
		let subCatFilter = catFilter.filter((item) => item.subcat === idSubcat)

		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (idCat === undefined){
					resolve(gear);
				}
				if (idSubcat === undefined){
					resolve(catFilter);
				} else {
					resolve(subCatFilter);
				}
			}, 2000);
		}).then((res) => {
			setGearList(res);
			setLoading(false);
		});
	}, [idCat, idSubcat]);

	return loading ? (
		<HStack>
			<Spinner size="xl" /> <Text>Loading...</Text>
		</HStack>
	) : (
		<Box borderWidth="1px" borderRadius="lg" margin="auto" ml={2} mr={2}>
			<Box>
				<Text
					fontFamily={"heading"}
					fontSize={{ base: "24px", md: "30px", lg: "36px" }}
					mb={10}
					ms={5}
					align="start"
				>
					{msg}
				</Text>
			</Box>
			<Box mr={2}>
				<SimpleGrid minChildWidth="300px" spacing="18px">
					<ItemList gearList={gearList} />
				</SimpleGrid>
			</Box>
		</Box>
	);
}

export default ItemListContainer;
