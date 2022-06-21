import React from 'react'
import {Box, Text} from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';


function ItemListContainer({msg}) {

    function onAdd(){
        alert("Agregaste los Items al carrito")
    }

    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' mt={5} align='center'>
            <Text 
            fontFamily={'heading'}
            fontSize={{ base: '24px', md: '30px', lg: '36px' }}
            >
                {msg}
            </Text>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </Box>
    )
}

export default ItemListContainer
