import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function CheckOut() {

  const { cart, finalPrice, clear } = useContext(CartContext);
  let navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(values) {
    const fecha = new Date();
    let auxCart = cart.map((item) => {
      let aux = {
        id: item.id,
        model: item.model,
        quantity: item.quant,
        price: item.price,
      };
      return { ...aux };
    });

    let pedido = {
      ticket: values,
      cart: auxCart,
      total: finalPrice(),
      date: fecha,
    };

    if(cart.length < 0){
      const db = getFirestore();
      const CollectionRef = collection(db, 'checkout');
      await addDoc(CollectionRef, pedido).then(({ id }) => {
        Swal.fire({
          title: 'Completado.',
          text: `Su numero de compra es ${id}. Gracias por elegirnos.`,
          icon: 'success',
          confirmButtonText: 'Aceptar',
          background: '#252d4d',
          color: 'white',
          confirmButtonColor: '#3ac9b0',
        }).then(() => {
          clear();
          return navigate('/');
        })
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: `El carrito no puede estar vacío`,
        icon: 'error',
        confirmButtonText: 'Aceptar',
        background: '#252d4d',
        color: 'white',
        confirmButtonColor: '#3ac9b0',
      })
    }
  }

  return (
    <Box w={'50%'} m='auto' mt={25} border='1px' p={5} bg={useColorModeValue('gray.100', '#252d4d')}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor='name'>Nombre</FormLabel>
          <Input bg={useColorModeValue('black', 'gray.500')}
            color={useColorModeValue('white', 'black')} 
            id='name' 
            placeholder='Ingrese su nombre...'
            _placeholder={{ color: 'inherit' }}
            {...register('name', {
              required: 'Campo obligatorio',
              minLength: { value: 6, message: 'Mínimo 6 caracteres' },
              maxLength: { value: 40, message: 'Mínimo 40 caracteres' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.phone} mt={2}>
          <FormLabel htmlFor='phone'>Teléfono</FormLabel>
          <Input bg={useColorModeValue('black', 'gray.500')}
            color={useColorModeValue('white', 'black')}
            id='phone'
            placeholder='Ingrese su número de teléfono...'
            _placeholder={{ color: 'inherit' }}
            {...register('phone', {
              required: 'Campo obligatorio',
              minLength: { value: 8, message: 'Debe tener un mínimo de 8 números' },
              pattern: {
                value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                message: 'Ingrese un número de teléfono válido'
              },
            })}
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.mail} mt={2}>
          <FormLabel htmlFor='mail'>Mail</FormLabel>
          <Input bg={useColorModeValue('black', 'gray.500')}
            color={useColorModeValue('white', 'black')}
            id='mail'
            placeholder='Ingrese su e-mail...'
            _placeholder={{ color: 'inherit' }}
            {...register('mail', {
              required: 'Campo obligatorio',
              minLength: { value: 4, message: 'Mínimo 4 caracteres' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Solamente puede ingresar un email válido'
              },

            })}
          />
          <FormErrorMessage>
            {errors.mail && errors.mail.message}
          </FormErrorMessage>
        </FormControl>

        <Button mt={10} colorScheme='green' isLoading={isSubmitting} type='submit' w={'100%'}>
          Comprar
        </Button>
      </form>
    </Box>
  )
}