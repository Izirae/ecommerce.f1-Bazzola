import React, { useEffect, useState } from 'react'
import {Box, Text, Spinner, SimpleGrid, HStack} from '@chakra-ui/react';
import ItemList from '../ItemList/ItemList';


function ItemListContainer({msg}) {

    const [gearList, setGearList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let gear = [
            {   id: 1,
                model: 'Gorra McLaren 2022 Special Edition',
                brand: 'New Era',
                price: 56,
                imgURL: "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2022-new-era-special-edition-9forty-fade-cap_ss4_p-13301974+u-t0qx77ypmm369udcck74+v-2222ef1ae79c4a51849fb90f3b463413.jpg?_hv=1&w=340"
            },
            {   id: 2,
                model: 'Camiseta Alfa Romeo Sauber F1 2022',
                brand: 'Alfa Romeo',
                price: 68,
                imgURL: "https://images.footballfanatics.com/alfa-romeo-racing/alfa-romeo-f1-team-orlen-2022-team-t-shirt_ss4_p-13303037+u-15drp20ro3gsjusw9mcu+v-b1e25c321c9b498e939b95e1d81fe655.jpg?_hv=1&w=340"
            },
            {   id: 3,
                model: 'Chaqueta de verano Scuderia Ferrari',
                brand: 'Puma',
                price: 178,
                imgURL: "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2022-team-summer-jacket_ss4_p-13300701+u-1hyxawhxllsnp2jh7a87+v-adeec6a101bd4de59cf2503a14a4594d.jpg?_hv=1&w=900"
            },
            {   id: 4,
                model: 'Polo Scuderia Alpha Tauri 2022 - Mujer',
                brand: 'Alpha Tauri',
                price: 98,
                imgURL: "https://images.footballfanatics.com/alphatauri/scuderia-alpha-tauri-2022-team-polo-womens-navy_ss4_p-13301115+u-s0xey0iuw4tzc9onbtvn+v-101580796e714d709233d51cd0b243e3.jpg?_hv=1&w=900"
            },
            {   id: 5,
                model: 'Chaqueta híbrida Aston Martin F1 Cognizant F1 2022 - Mujer',
                brand: 'Aston Martin',
                price: 225,
                imgURL: "https://images.footballfanatics.com/aston-martin/aston-martin-cognizant-f1-2022-official-team-hybrid-jacket-womens_ss4_p-12099165+u-17yzfqv6p1edbhlzhyhe+v-d55c8ac7a25c4153954540c29daa4a19.jpg?_hv=1&w=900"
            },
            {   id: 6,
                model: 'Camiseta Scuderia Ferrari 2022 - Mujer',
                brand: 'Puma',
                price: 76,
                imgURL: "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2022-team-t-shirt-womens_ss4_p-13300704+u-un2adu6mxf3lzeygji2s+v-6173b147d6af44fb9d227132bcbd0dca.jpg?_hv=1&w=900"
            },
            {   id: 7,
                model: 'Modelo Scuderia Ferrari 2021 - Carlos Sainz - Escala 1:43',
                brand: 'Ferrari',
                price: 38,
                imgURL: "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2021-model-carlos-sainz-1:43-scale_ss4_p-12074980+u-g31uqdyxhld38j17r8pp+v-142e2011ae3b4e368b667038ebf42e36.jpg?_hv=1&w=900"
            },
            {   id: 8,
                model: 'Taza térmica mate Scuderia Ferrari',
                brand: 'Ferrari',
                price: 32,
                imgURL: "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-matte-thermal-mug_ss4_p-12046337+u-7hl8dwwoeduavyiytbqg+v-830b182941564d54b47cfe60bf69e03e.jpg?_hv=1&w=900"
            },
            {   id: 9,
                model: 'Pijama Fórmula 1 - Bebé',
                brand: 'F1',
                price: 30,
                imgURL: "https://images.footballfanatics.com/formula-1-merchandise/formula-1-boilersuit-sleepsuit-baby_ss4_p-12098565+u-pinojghmi51u3b0ysqyg+v-09ea5d58556f4e3d800c454dd08100df.jpg?_hv=1&w=900"
            },
            {   id: 10,
                model: 'Llavero de casco Ayrton Senna',
                brand: 'F1 ',
                price: 12,
                imgURL: "https://images.footballfanatics.com/fullerton-flyers/ayrton-senna-helmet-keyring_ss4_p-12055677+u-ww7eahd36fuaes4xwzw8+v-e7ecf361a97241ee85d9f87290a6a7e6.jpg?_hv=1&w=900"
            }
        ];
    
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(gear)
            }, 2000);
        }).then((res)=>{
            setGearList(res)
            setLoading(false)
        })
    
    
    }, [])

    return (

        loading ? <HStack><Spinner size="xl" /> <Text>Loading...</Text></HStack> :
        <Box borderWidth='1px' borderRadius='lg' margin="auto" ml={2} mr={2}>
            <Box>
            <Text 
            fontFamily={'heading'}
            fontSize={{ base: '24px', md: '30px', lg: '36px' }}
            mb={10}
            ms={5}
            align='start'
            >
                {msg}
            </Text>
            </Box>
            <Box  mr={2}>
            <SimpleGrid minChildWidth='300px' spacing='18px'><ItemList gearList={gearList}/></SimpleGrid>
            </Box>
        </Box>
        
    )
}

export default ItemListContainer
