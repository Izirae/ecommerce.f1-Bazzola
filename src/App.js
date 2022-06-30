import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';

function App(){

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <br/>
      <Routes>
        <Route path="/" element={<ItemListContainer msg={'Productos:'}/>}/>
        <Route path="/categoria/:idCat" element={<ItemListContainer msg={'Productos por Escudería:'}/>}/>
        <Route path="/categoria/:idCat/:idSubcat" element={<ItemListContainer msg={'Productos por categoría:'}/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
