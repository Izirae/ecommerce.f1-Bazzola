import { MdShoppingCart } from "react-icons/md";
import {Button, Icon, Text} from '@chakra-ui/react';

export default function CartWidget({cant}) {
    return (
      <Button><Icon as={MdShoppingCart} /><Text ml={2}>{cant}</Text></Button>
    )
}