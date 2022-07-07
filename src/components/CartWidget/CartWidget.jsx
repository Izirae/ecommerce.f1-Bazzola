import { MdShoppingCart } from "react-icons/md";
import { Button, Icon, Text } from '@chakra-ui/react';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <Button as={Link} to="/cart">
      <Icon as={MdShoppingCart} />
      {totalItems() === 0 ? (<></>) : (<Text ml={2}>{totalItems()}</Text>)}
    </Button>
  )
}