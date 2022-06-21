import React, {useState, useEffect} from 'react'
import { Button, ButtonGroup, IconButton, Text} from '@chakra-ui/react'
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
        <ButtonGroup mt={5} size='sm' isAttached variant='outline'>
            <IconButton onClick={()=>{lessItems()}} icon={<MinusIcon />} />
            <Button disabled>{auxItems}</Button>
            <IconButton onClick={()=>{moreItems()}} icon={<AddIcon />} />
        </ButtonGroup>
        <Text size='sm' mt={2}>Stock: {stock} </Text>
        
        <Button mt={3} mb={2} onClick={onAdd}>Agregar al Carrito</Button>
        </>
    )
}

export default ItemCount
