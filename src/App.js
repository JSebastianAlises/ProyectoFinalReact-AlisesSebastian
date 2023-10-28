import "./App.css";
import NavBar from './components/NavBar/navBar';
import ItemListContainer from "./components/ItemsProductos/ItemListContainer/ItemListContainer"
import CarritoDeCompras from "./components/CarritoDeCompras/CarritoDeCompras"
import ItemDetailContainer from "./components/ItemsProductos/ItemDetailContainer/ItemDetailContainer"
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {

    return (
        <div className="App">
            <Header/>
            <CartProvider >
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/categorias/:categoriaId" element={<ItemListContainer />} />
                        <Route exact path="/productos/:productoId" element={<ItemDetailContainer />} />
                        <Route path="/carritodecompras" element={<CarritoDeCompras />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<h1> 404 NOT FOUND </h1>} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;
