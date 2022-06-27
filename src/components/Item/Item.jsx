import React from 'react'
import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export default function Item({id, model, brand, price, imgURL}) {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    <Link  onClick={onOpen}>{model}</Link>
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={700} fontSize={'xl'}>
                      ${price} USD
                    </Text>
                  </Stack>
                </Stack>
                <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} size='5xl'>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Detalles</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <ItemDetailContainer model={model} price={price} imgURL={imgURL}/>
                      </ModalBody>
                      <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                          Cerrar
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
              </Box> 
              
        );
}
        