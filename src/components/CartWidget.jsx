import { MdShoppingCart } from "react-icons/md";
import {Button, Icon} from '@chakra-ui/react';

export default function CartWidget() {
    return (
      <Button><Icon as={MdShoppingCart} /></Button>
    )
}