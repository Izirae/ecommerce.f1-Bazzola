import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme";
import CartProvider from './contexts/CartContext/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyDmaAW3kzc5fXReDJ6PHXPTGJn5VyfcXm4",

  authDomain: "ecommerce-react37750.firebaseapp.com",

  projectId: "ecommerce-react37750",

  storageBucket: "ecommerce-react37750.appspot.com",

  messagingSenderId: "701658507761",

  appId: "1:701658507761:web:07e3ef172c2ef21978fc50"

};


// Initialize Firebase

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
