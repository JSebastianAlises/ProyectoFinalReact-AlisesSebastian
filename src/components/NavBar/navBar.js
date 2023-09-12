import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

function NavBar (){
    return (
        <div className="barra-de-navegacion">
            <nav>
                <h3>
                    <a href="./index.html">Tienda de discos</a>
                    <a href="./pages/carrito.html">Carrito de compras</a>
                </h3>
                <CartWidget/>
            </nav>
        </div>
    )
}

export default NavBar;