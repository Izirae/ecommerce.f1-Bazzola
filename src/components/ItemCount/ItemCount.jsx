import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	ButtonGroup,
	IconButton,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
	let [addItems, setAddItems] = useState(1);

	function moreItems() {
		setAddItems(addItems < stock ? addItems + 1 : (addItems = stock));
	}

	function lessItems() {
		setAddItems(addItems > 1 ? addItems - 1 : (addItems = 1));
	}

	useEffect(() => {
		if (addItems === stock) {
			alert("El stock máximo es: " + stock);
		}
		// eslint-disable-next-line
	}, [addItems]);

	return (
		<Box>
			<Box
				borderWidth="1px"
				overflow="hidden"
				width="165px"
				align="center"
				margin="auto"
				borderRadius="lg"
				bg={useColorModeValue("yellow.50", "gray.800")}
			>
				<ButtonGroup margin="auto" size="sm" isAttached variant="outline">
					<IconButton
						onClick={() => {
							lessItems();
						}}
						icon={<MinusIcon />}
					/>

					<Text width="100px" py={1} color={useColorModeValue("gray.600", "white")}>
						{addItems}
					</Text>
					<IconButton
						onClick={() => {
							moreItems();
						}}
						icon={<AddIcon />}
					/>
				</ButtonGroup>
			</Box>
			<Box align="center">
				<Text size="sm" mt={2}>
					Stock: {stock}
				</Text>
			</Box>
			<Box>
				<Button mt={3} mb={2} width="160px" onClick={()=>onAdd(addItems)} colorScheme="blue">
					Agregar al Carrito
				</Button>
				<Button as={Link} to="/cart" mt={3} mb={2} ml={2} width="160px" colorScheme="green">
					Finalizar compra
				</Button>
			</Box>
		</Box>
	);
};

export default ItemCount;