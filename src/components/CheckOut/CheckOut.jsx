// import React, { useContext, useState } from 'react';
// import { Box, Button, Center, Heading, Input } from '@chakra-ui/react';
// import { CartContext } from '../../contexts/CartContext/CartContext';
// import { addDoc, collection, getFirestore } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// export default function CheckOut() {
  // const { cart, finalPrice, clear } = useContext(CartContext);
  // const [nombre, setNombre] = useState('');
  // const [tel, setTel] = useState('');
  // const [email, setEmail] = useState('');
  // let navigate = useNavigate();

  // async function handleClickComprar() {
  //   const fecha = new Date();
  //   let auxCart = cart.map((item) => {
  //     let aux = {
  //       id: item.id,
  //       model: item.model,
  //       quantity: item.quant,
  //       price: item.price,
  //     };
  //     return { ...aux };
  //   });

  //   let pedido = {
  //     ticket: {
  //       name: nombre,
  //       phone: tel,
  //       mail: email,
  //     },
  //     cart: auxCart,
  //     total: finalPrice(),
  //     date: fecha,
  //   };

  //   if (nombre === '' || email === '' || tel === '' || cart.length === 0) {
  //     alert('Error, los campos o el carrito no pueden estar vacíos');
  //     return;
  //   } else {
  //     const db = getFirestore();
  //     const CollectionRef = collection(db, 'checkout');
  //     await addDoc(CollectionRef, pedido).then(({ id }) => alert('Su numero de compra es ' + id + '. Muchas gracias por su compra'));

  //     clear();

  //     return navigate('/');
  //   }
  // }

  import { useForm } from 'react-hook-form'
  import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'
  
  export default function HookForm() {
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm()
  
    function onSubmit(values) {
      return new Promise((resolve) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resolve()
        }, 3000)
      })
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor='name'>First name</FormLabel>
          <Input
            id='name'
            placeholder='name'
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor='name'>First name</FormLabel>
          <Input
            id='name'
            placeholder='name'
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor='name'>First name</FormLabel>
          <Input
            id='name'
            placeholder='name'
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Submit
        </Button>
      </form>
    )
  }