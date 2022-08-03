import { Flex, Link, useColorModeValue, Stack, Image, Box, Text, HStack, Icon, Grid, GridItem, Button } from '@chakra-ui/react';
import * as React from 'react';
import { FiGift } from 'react-icons/fi';
import { RiDeleteBack2Fill } from "react-icons/ri"
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';


export function CartItem({ item }) {
  
  const { removeItem } = useContext(CartContext);
  const { id, model, quant, imgURL, subTotal, } = item;
  const itemColor = useColorModeValue('gray.600', 'gray.400');


  return (
    <Grid
      direction={{
        base: 'column',
        md: 'row',
      }}
      templateColumns='repeat(12, 1fr)' gap={4}
      borderWidth='1px'
      rounded="lg"
    >
      <GridItem colSpan={6}>
      <Stack direction="row" spacing="5" width="full">
        <Image rounded="lg" width={{base:"60px", md:"120px"}} height={{base:"60px", md:"120px"}} fit="cover" src={imgURL} alt={model} draggable="false" loading="lazy" mt={"auto"} mb={"auto"}/>
        <Box pt="4">
          <Stack spacing="2">
            <Text fontWeight="semibold">{model}</Text>
          </Stack>
            <HStack spacing="1" mt="3" color={itemColor}>
              <Icon as={FiGift} boxSize="4" />
              <Link fontSize="sm" textDecoration="underline">
                Añadir envoltorio
              </Link>
            </HStack>
        </Box>
      </Stack>
      </GridItem>
      <GridItem colStart={8} colEnd={13} m="auto">
      {/* Desktop */}
      <Grid direction={"row"} templateColumns='repeat(5, 1fr)' gap={2} 
        display={{
          base: 'none',
          md: 'grid',
      }}>
        <GridItem colSpan={2}>
          <Text mt={2} align="center">x{quant}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text fontWeight='semibold' mt={2}>${subTotal} USD</Text>
        </GridItem>
        <GridItem>
          <Button aria-label={`Delete ${model} from cart`} onClick={() => removeItem(id)} colorScheme="red" variant='ghost'>
            <Icon as={RiDeleteBack2Fill} h={8} w={8}/>
          </Button>
        </GridItem>
      </Grid>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <HStack>
        <Text>x{quant}</Text>
        <Text mt={2} fontWeight='semibold'>${subTotal} USD</Text>
        <Button aria-label={`Delete ${model} from cart`} onClick={() => removeItem(id)} colorScheme="red" variant='ghost'>
          <Icon as={RiDeleteBack2Fill} h={6} w={6}/>
        </Button>
        </HStack>
      </Flex>
      </GridItem>
    </Grid>
  );
};
