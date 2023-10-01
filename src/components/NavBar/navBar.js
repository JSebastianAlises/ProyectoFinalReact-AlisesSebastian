import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom";

function NavBar (){
    return (
        <div className="barra-de-navegacion">
            <nav>
                <h3>
                    <NavLink activeClassName to={"/"} >Productos</NavLink>
                    <NavLink to={`/categorias/ropa`}>Ropa</NavLink>
                    <NavLink to={`/categorias/discos`}>discos</NavLink> 
                    <NavLink activeClassName to={"/carritoDeCompras"} >Carrito de compras</NavLink>
                </h3>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar;