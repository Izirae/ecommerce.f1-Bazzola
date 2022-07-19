import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Button, Icon, Image, Center, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Cart() {
	const { cart, removeItem, clear, finalPrice } = useContext(CartContext);
	const items = cart.map((item) => {
		return (
			<Tr key={item.id}>
				<Td>
					<Image rounded={'md'} alt={'product image'} src={item.imgURL} h={{ base: '80px', sm: '80px', lg: '80px' }} />
				</Td>
				<Td>{item.model}</Td>
				<Td>${item.price} USD</Td>
				<Td>{item.quant}</Td>
				<Td>${item.subTotal} USD</Td>
				<Td>
					<Button onClick={() => removeItem(item.id)} colorScheme="red" size={'sm'}>
						<Icon as={RiDeleteBin2Fill} w={6} h={6} />
					</Button>
				</Td>
			</Tr>
		);
	});

	return cart.length === 0 ? (
		<>
			<Center>
				<Heading mt={10}>Tu carrito esta Vacio</Heading>
			</Center>
			<Center mt={10}>
				<Button as={Link} to="/">
					Volver
				</Button>
			</Center>
		</>
	) : (
		<>
			<TableContainer>
				<Table variant="striped" align="center" borderWidth={'2px'} colorScheme="teal" w={'75%'}>
					<TableCaption>
						<Heading size={'md'}>Total: ${finalPrice()} USD</Heading>
					</TableCaption>
					<Thead>
						<Tr>
							<Th>Img</Th>
							<Th>Producto</Th>
							<Th>Precio</Th>
							<Th>Cantidad</Th>
							<Th>Sub Total</Th>
							<Th>Eliminar item</Th>
						</Tr>
					</Thead>
					<Tbody>{items}</Tbody>
				</Table>
			</TableContainer>
			<Center mt={5}>
				<Button onClick={() => clear()} colorScheme="red" size={'sm'}>
					<Icon as={RiDeleteBin2Fill} w={6} h={6} />
					Vaciar carrito
				</Button>
				<Button as={Link} to="/checkout" me={5} color={'green.500'}>
					Finalizar La compra
				</Button>
			</Center>
		</>
	);
}
