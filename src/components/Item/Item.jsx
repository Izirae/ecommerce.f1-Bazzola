import {
  Box, Heading, Image, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Item({ id, model, brand, price, imgURL }) {


  return (
    <Box
      as={RouterLink} to={"/item/" + id}
      style={{ textDecoration: 'none' }}
      bg={useColorModeValue('gray.100', '#252d4d')}
      color={useColorModeValue('black', 'white')}
      role={'group'}
      p={6}
      maxW={'300px'}
      h={'475px'}
      w={'full'}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={0}
      ml={'auto'}
      mr={'auto'}
      mb={5}
      _hover={{
        boxShadow: 'dark-lg',
      }}
    >

      <Box
        rounded={'lg'}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: '100%',
          h: '100%',
          pos: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: `url(${imgURL})`,
          filter: 'blur(5px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(10px)',
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
          <Text>{model}</Text>
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={700} fontSize={'xl'}>
            ${price} USD
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
