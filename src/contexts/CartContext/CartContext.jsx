import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  function addItem(item) {

    let newItem = [];

    if (isInCart(item.id)) {

      let dup = isInCart(item.id)
      dup = { ...dup, quant: item.quant }
      newItem = cart.map((dupItem) => {
        return { ...dupItem, quant: dupItem.quant + dup.quant, subTotal: dupItem.price * (dupItem.quant + dup.quant) }
      })
    } else {
      newItem = cart.concat(item);
    }
    setCart(newItem);
  }

  function removeItem(id) {
    const delItem = cart.filter((item) => item.id !== id);
    setCart(delItem);
  }

  function clear() {
    setCart([]);
  }

  function finalPrice() {
    let price = cart.reduce((prev, next) => prev + next.subTotal, 0)
    return price;
  }

  function totalItems() {
    const total = cart.reduce((prev, next) => prev + next.quant, 0);
    return total;
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, finalPrice, clear, totalItems }}>{children}</CartContext.Provider>
    </>
  );
}