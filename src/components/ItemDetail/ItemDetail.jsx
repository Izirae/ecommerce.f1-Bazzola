import {
	Box,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	VStack,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import ItemCount from '../ItemCount/ItemCount'

function onAdd() {
	alert("Agregaste los Items al carrito");
}

export default function ItemDetail({price, model, imgURL, details}) {
	return (
		<Container maxW={"7xl"}>
			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 18, md: 24 }}
			>
				<Flex>
					<Image
						rounded={"md"}
						alt={"product image"}
						src={imgURL}
						fit={"cover"}
						align={"center"}
						w={"100%"}
						h={{ base: "100%", sm: "400px", lg: "500px" }}
					/>
				</Flex>
				<Stack spacing={{ base: 6, md: 10 }}>
					<Box as={"header"}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
						>
							{model}
						</Heading>
						<Text
							color={useColorModeValue("gray.900", "gray.400")}
							fontWeight={300}
							fontSize={"2xl"}
						>
							${price} USD
						</Text>
					</Box>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={"column"}
						divider={
							<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />
						}
					>
						<VStack spacing={{ base: 4, sm: 6 }}>
							<Text
								color={useColorModeValue("gray.500", "gray.400")}
								fontSize={"m"}
								fontWeight={"300"}
							>
								{details}
							</Text>
						</VStack>
					
					<VStack spacing={{ base: 4, sm: 6 }}>
						<ItemCount stock={10} initial={1} onAdd={onAdd} />
					</VStack>
					</Stack>
					<Stack direction="row" alignItems="center" justifyContent={"center"}>
						<MdLocalShipping />
						<Text>2-3 días hábiles</Text>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	);
}
