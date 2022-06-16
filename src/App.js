import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer msg={'hola'}/>
    </>
  );
}

export default App;
