import { Flex, Link, Select, useColorModeValue, Stack, Image, Box, Text, HStack, Icon, Grid, GridItem, Button } from '@chakra-ui/react';
import * as React from 'react';
import { FiGift } from 'react-icons/fi';
import { VscChromeClose } from "react-icons/vsc"
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';


const QuantitySelect = (props) => {

  const Options = (props) =>{
    let val = []
    for(let i = 1; i <= props.stock; i++){
      val.push(<option key={i} value={String(i)}>{i}</option>)
    }
    return val
  }

  return (
    <Select key="selectValue" maxW="64px" aria-label="Select quantity" focusBorderColor={useColorModeValue('blue.500', 'blue.200')} {...props}>
      <Options value={props.value} stock={props.stock}/>
    </Select>
  );
};

export function CartItem({ item }) {
  
  const { removeItem } = useContext(CartContext);
  const { id, isGiftWrapping = true, model, quant, imgURL, subTotal, onChangeQuantity, stock } = item;
  const itemColor = useColorModeValue('gray.600', 'gray.400');


  return (
    <Grid
      direction={{
        base: 'column',
        md: 'row',
      }}
      templateColumns='repeat(12, 1fr)' gap={4}
    >
      <GridItem colSpan={6}>
      <Stack direction="row" spacing="5" width="full">
        <Image rounded="lg" width="120px" height="120px" fit="cover" src={imgURL} alt={model} draggable="false" loading="lazy" mt={"auto"} mb={"auto"}/>
        <Box pt="4">
          <Stack spacing="2">
            <Text fontWeight="semibold">{model}</Text>
          </Stack>
          {isGiftWrapping && (
            <HStack spacing="1" mt="3" color={itemColor}>
              <Icon as={FiGift} boxSize="4" />
              <Link fontSize="sm" textDecoration="underline">
                Añadir envoltorio
              </Link>
            </HStack>
          )}
        </Box>
      </Stack>
      </GridItem>
      <GridItem colStart={8} colEnd={12} m="auto">
      {/* Desktop */}
      <Grid direction={"row"} templateColumns='repeat(5, 1fr)' gap={2} display={{
          base: 'none',
          md: 'grid',
        }}>
        <GridItem colSpan={2}>
          <QuantitySelect
            stock={stock}
            value={quant}
            onChange={(e) => {
              onChangeQuantity?.(+e.currentTarget.value);
            }}
          />
          </GridItem>
          <GridItem colSpan={2}>
          <Text mt={2} fontWeight='semibold'>${subTotal}USD</Text>
          </GridItem>
          <GridItem>
          <Button aria-label={`Delete ${model} from cart`} onClick={() => removeItem(id)} colorScheme="red" h={10} w={6}>
          <Icon as={VscChromeClose} h={6} w={6}/>
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
        <QuantitySelect
          value={quant}
          stock={stock}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        />
        <Button aria-label={`Delete ${model} from cart`} onClick={() => removeItem(id)} colorScheme="red" h={10} w={6}>
          <Icon as={VscChromeClose} h={6} w={6}/>
        </Button>
        </HStack>
      </Flex>
      </GridItem>
    </Grid>
  );
};
