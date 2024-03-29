import React from 'react';
import {
	Box,
	Flex,
	HStack,
	Link as CLink,
	Stack,
	useColorModeValue as mode,
	Button,
	Center,
	Heading,
	Text,
	Icon,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CartItem } from './CartItem';
import { FaArrowRight } from 'react-icons/fa';

export default function Cart() {
	const { cart, clear, finalPrice, totalItems } = useContext(CartContext);

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
			<Box
				maxW={{
					base: '3xl',
					lg: '7xl',
				}}
				mx="auto"
				px={{
					base: '4',
					md: '8',
					lg: '12',
				}}
				py={{
					base: '6',
					md: '8',
					lg: '12',
				}}
			>
				<Stack
					direction={{
						base: 'column',
						lg: 'row',
					}}
					align={{
						lg: 'flex-start',
					}}
					spacing={{
						base: '8',
						md: '16',
					}}
				>
					
					<Stack
						spacing={{
							base: '8',
							md: '10',
						}}
						flex="2"
					>

						<Stack spacing="6">
							{cart.map((item) => {
								return <CartItem key={item.id} item={item} />
							})}
						</Stack>
					</Stack>

					<Flex direction="column" align="center" flex="1">
						<Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
							<Heading size="md">Compra ({totalItems()}{totalItems() === 1 ? " producto" : " productos"})</Heading>

							<Stack spacing="6">
							<Flex justify="space-between" fontSize="sm">
								<Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
									Subtotal
								</Text>
								<Text fontWeight="medium">${finalPrice()} USD</Text>
							</Flex>

							<Flex justify="space-between" fontSize="sm">
								<Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
									Envío + Impuestos
								</Text>
								<CLink href="#" textDecor="underline">
									Calcular envío
								</CLink>
							</Flex>

							<Flex justify="space-between" fontSize="sm">
								<Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
									Código de cupón
								</Text>
								<CLink href="#" textDecor="underline">
									Añadir cupón
								</CLink>
							</Flex>

								<Flex justify="space-between">
									<Text fontSize="lg" fontWeight="semibold">
										Total
									</Text>
									<Text fontSize="xl" fontWeight="extrabold">${finalPrice()} USD</Text>
								</Flex>
							</Stack>
							<Button as={Link} to="/checkout" colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
								Checkout
							</Button>
						</Stack>
						<HStack mt="6" fontWeight="semibold">
							<p>o</p>
							<CLink as={Link} to="/" color={mode('blue.500', 'blue.200')}>Seguir comprando</CLink>
						</HStack>
					</Flex>
				</Stack>
			</Box>
			<Center>
				<Button onClick={() => clear()} colorScheme="red" size={'sm'} mb={5}>
					<Icon as={MdDelete} w={6} h={6} />
						Vaciar carrito
				</Button>
			</Center>
		</>
	);
}
