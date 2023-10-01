import "./App.css";
import NavBar from './components/NavBar/navBar';
import ItemListContainer from "./components/ItemsProductos/ItemListContainer/ItemListContainer"
import CarritoDeCompras from "./components/CarritoDeCompras/CarritoDeCompras"
import ItemDetailContainer from "./components/ItemsProductos/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
                <div class="logo">
                    <img class="logo-superior" src={require("./imagenes/descarga.png")} alt="logo de la renga"/>
                </div>
                <h1>
                    LA RENGA
                </h1>
                <h2>
                    Los Mismos De Siempre
                </h2>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/categorias/:categoriaId" element={<ItemListContainer />} />
                        <Route exact path="/productos/:productoId" element={<ItemDetailContainer />} />
                        <Route path="/carritodecompras" element={<CarritoDeCompras />} />
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;
