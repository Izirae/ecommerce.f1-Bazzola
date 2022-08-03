import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorageCart(); 
  }, []);  

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  function addItem(item) {
    let newItem = [];

    if (isInCart(item.id)) {
      let dup = isInCart(item.id);
      dup = { ...dup, quant: item.quant };
      console.log(dup, "dup")
      newItem = cart.map((dupItem) => {
       return dupItem.id === dup.id ? { ...dupItem, quant: dupItem.quant + dup.quant, subTotal: dupItem.price * (dupItem.quant + dup.quant) }
        : {...dupItem}
      });
    } else {
      newItem = cart.concat(item);
    }
    setCart(newItem);
    setLocalStorageCart(newItem);
  }

  function removeItem(id) {
    const delItem = cart.filter((item) => item.id !== id);
    setCart(delItem);
    setLocalStorageCart(delItem);
  }

  function clear() {
    setCart([]);
    setLocalStorageCart([]);
  }

  function finalPrice() {
    let price = cart.reduce((prev, next) => prev + next.subTotal, 0);
    return price;
  }

  function totalItems() {
    const total = cart.reduce((prev, next) => prev + next.quant, 0);
    return total;
  }

  const localStorageCart = () => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }

  const setLocalStorageCart = ( cart ) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, finalPrice, clear, totalItems }}>{children}</CartContext.Provider>
    </>
  );
}
