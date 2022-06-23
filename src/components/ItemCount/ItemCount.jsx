import React, {useState, useEffect} from 'react'
import { Box, Button, ButtonGroup, IconButton, Text, useColorModeValue} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const ItemCount = ({stock, initial, onAdd}) => {

    let [auxItems, setAuxItems] = useState(initial);


    function moreItems(){
        setAuxItems( auxItems < stock ? auxItems+1 : auxItems=stock )
    }

    function lessItems(){
        setAuxItems( auxItems > 1 ? auxItems-1 : auxItems=1 )
    }

    useEffect(() => {
        if(auxItems===stock){
            alert("El stock máximo es: " + stock)
        }
        // eslint-disable-next-line
    }, [auxItems])
    

    return (
        <>
        <Box borderWidth='1px' 
        overflow='hidden' 
        width='165px' 
        align='center' 
        margin='auto' 
        borderRadius='lg'
        bg={useColorModeValue('orange.100', 'gray.800')}
        >
        <ButtonGroup margin='auto' size='sm' isAttached variant='outline'>
            <IconButton onClick={()=>{lessItems()}} icon={<MinusIcon />} />

            <Text width="100px"
            py={1} 
            color={useColorModeValue('gray.600', 'white')}>
                {auxItems}
            </Text>
            <IconButton onClick={()=>{moreItems()}} icon={<AddIcon />} />
        </ButtonGroup>
        </Box>
        <Box align='center'>
        <Text size='sm' mt={2}>Stock: {stock} </Text>
        
        <Button mt={3} mb={2} width='160px' onClick={onAdd} colorScheme='green'>Agregar al Carrito</Button>
        </Box>
        </>
    )
}

export default ItemCount
