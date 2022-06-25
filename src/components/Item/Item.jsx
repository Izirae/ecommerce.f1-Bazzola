import React from 'react'
import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image
} from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';

export default function Item({id, model, brand, price, imgURL}) {

    function onAdd(){
        alert("Agregaste los Items al carrito")
        console.log(id)
    }

    return (
              <Box
                bg={useColorModeValue('#FFF159', 'blue.800')}
                color={useColorModeValue('gray.600', 'white')}
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={0}
                margin={5}>
                <Box
                  rounded={'lg'}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundImage: `url(${imgURL})`,
                    filter: 'blur(10px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}>
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={imgURL}
                  />
                </Box>
                <Stack pt={10} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {brand}
                  </Text>
                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} align='center'>
                    {model}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      ${price}
                    </Text>
                  </Stack>
                </Stack>
                <br/>
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
              </Box>      
        );
}
        