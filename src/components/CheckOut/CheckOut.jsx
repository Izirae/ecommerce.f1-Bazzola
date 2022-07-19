import React, { useContext, useState } from 'react';
import { Box, Button, Center, Heading, Input } from '@chakra-ui/react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
  const { cart, finalPrice, clear } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  let navigate = useNavigate();

  async function handleClickComprar() {
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
      ticket: {
        name: nombre,
        phone: tel,
        mail: email,
      },
      cart: auxCart,
      total: finalPrice(),
      date: fecha,
    };

    if (nombre === '' || email === '' || tel === '' || cart.length === 0) {
      alert('Error, los campos o el carrito no pueden estar vacíos');
      return;
    } else {
      const db = getFirestore();
      const CollectionRef = collection(db, 'checkout');
      await addDoc(CollectionRef, pedido).then(({ id }) => alert('Su numero de compra es ' + id + '. Muchas gracias por su compra'));

      clear();

      return navigate('/');
    }
  }

  return (
    <Center mt={10}>
      <Box>
        <Heading>Complete para terminar su compra</Heading>
        <br></br>
        <Input id="nombre" onChange={(e) => setNombre(e.target.value)} type={'text'} placeholder={'Ingrese su Nombre'}></Input>
        <br></br>
        <br></br>
        <Input onChange={(e) => setTel(e.target.value)} type={'tel'} placeholder={'Ingrese su Telefono'}></Input>
        <br></br>
        <br></br>
        <Input id="email" onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'Ingrese su Email'}></Input>
        <br></br>
        <br></br>
        <Button type="submit" onClick={handleClickComprar}>
          Comprar
        </Button>
      </Box>
    </Center>
  );
}
