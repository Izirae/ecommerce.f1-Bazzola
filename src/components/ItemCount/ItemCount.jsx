import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

const ItemCount = ({ stock, onAdd }) => {

	const { totalItems } = useContext(CartContext);

	let [addItems, setAddItems] = useState(1);

	function moreItems() {
		setAddItems(addItems < stock ? addItems + 1 : (addItems = stock));
	}

	function lessItems() {
		setAddItems(addItems > 1 ? addItems - 1 : (addItems = 1));
	}

	return (
		<Box>
			<Box
				borderWidth="1px"
				overflow="hidden"
				width="165px"
				align="center"
				margin="auto"
				borderRadius="lg"
				borderColor={useColorModeValue("black", "white")}
			>
				<ButtonGroup margin="auto" size="sm" isAttached variant="outline">
					<IconButton
						onClick={() => {
							lessItems();
						}}
						icon={<MinusIcon />}
						borderRightColor={useColorModeValue("black", "white")}
					/>

					<Text width="100px" py={1} color={useColorModeValue("black", "white")}>
						{addItems}
					</Text>
					<IconButton
						onClick={() => {
							moreItems();
						}}
						icon={<AddIcon />}
						borderLeftColor={useColorModeValue("black", "white")}
					/>
				</ButtonGroup>
			</Box>
			<Box align="center">
				<Text size="sm" mt={2}>
					Stock: {stock}
				</Text>
			</Box>
			<Stack direction={['column', 'row']} mt={5}>
				<Button width="160px" onClick={() => onAdd(addItems)} colorScheme="blue">
					Agregar al Carrito
				</Button>
				{totalItems() === 0 ? (
					<></>
				) : (
					<Button as={Link} to="/cart"width="160px" colorScheme="green">
						Finalizar compra
					</Button>
				)}

			</Stack>
		</Box>
	);
};

export default ItemCount;