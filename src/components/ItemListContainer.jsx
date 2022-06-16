import React from 'react';
import {Box, Text} from '@chakra-ui/react';


function ItemListContainer({msg}) {
    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' mt={5}>
            <Text 
                fontFamily={'heading'}
                fontSize={{ base: '24px', md: '30px', lg: '36px' }}
                align='center'>
                    {msg}
                </Text>
        </Box>
    )
}

export default ItemListContainer
