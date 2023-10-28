import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { NavLink } from "react-router-dom";

function NavBar (){
    return (
        <div className="barra-de-navegacion">
            <nav>
                <div className="links-de-navegacion">
                    <NavLink activeClassName to={"/"} >Productos</NavLink>
                    <NavLink activeClassName to={`/categorias/ropa`}>Ropa</NavLink>
                    <NavLink activeClassName to={`/categorias/discos`}>Discos</NavLink> 
                    <NavLink activeClassName to={"/carritoDeCompras"} >Carrito</NavLink>
                </div>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar;