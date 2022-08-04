import { Container, Flex, Heading, Image, ListItem, SimpleGrid, Stack, StackDivider, Text, UnorderedList, useColorModeValue, VStack } from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import Swal from 'sweetalert2'

export default function ItemDetail({ gearList }) {
	const { cart, addItem } = useContext(CartContext);

	function onAdd(added) {
		
		let aux = cart.filter((el) => el.id === gearList.id)	
		let test = 0

		if (aux.length > 0){
			test = aux[0].quant + added
		}

		if(test <= gearList.stock){	
			addItem({ ...gearList, quant: added, subTotal: gearList.price * added });
			Swal.fire({
				title: 'Agregado',
				text: `Agregaste ${added} ${gearList.model} al carrito.`,
				icon: 'success',
				background: '#252d4d',
				color: 'white',
				timer: 2500,
				timerProgressBar: true,
				showConfirmButton: false,
			})

		} else {
			Swal.fire({
        title: 'Error.',
        text: `No puede agregar más items que el stock actual.`,
        icon: 'error',
        background: '#252d4d',
        color: 'white',
				timer: 2500,
				timerProgressBar: true,
				showConfirmButton: false,
				showCancelButton: true,
				cancelButtonText: 'Aceptar',
      })
		}
	}

	// lista de detalles
	const desc = gearList.desc.map((item) => <ListItem key={item}>{item}</ListItem>);

	return (
		<Container maxW={'7xl'}>
			<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
				<Flex>
					<Image rounded={'md'} alt={'product image'} src={gearList.imgURL} fit={'cover'} align={'center'} w={'100%'} h={{ base: '100%', sm: '400px', lg: '500px' }} />
				</Flex>
				<Stack spacing={{ base: 6, md: 10 }}>
					<Stack divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}>
						<Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
							{gearList.model}
						</Heading>
						<Text color={useColorModeValue('gray.900', 'gray.100')} fontWeight={500} fontSize={'2xl'}>
							${gearList.price} USD
						</Text>
					</Stack>

					<Stack spacing={{ base: 4, sm: 6 }} direction={'column'} divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}>
						<UnorderedList color={useColorModeValue('gray.800', 'gray.300')} fontSize={'m'} fontWeight={'300'} align="left">
							{desc}
						</UnorderedList>

						<VStack spacing={{ base: 4, sm: 6 }}>
							<ItemCount stock={gearList.stock} onAdd={onAdd} />
						</VStack>
					</Stack>
					<Stack direction="row" alignItems="center" justifyContent={'center'}>
						<MdLocalShipping />
						<Text>2-3 días hábiles</Text>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	);
}
