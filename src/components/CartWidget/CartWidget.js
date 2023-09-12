import React from "react";
import "./CartWidget.css"

function CartWidget () {
    return (
        <div className="carrito-contenedor">
            <a>
                <img className="carrito-imagen" src={require("../../imagenes/imagencarrito.jpg")} alt="Imagen del carrito" />
                <div>
                    <span className="carrito-numero">0</span>
                </div>
            </a>
        </div>
    )
}

export default CartWidget; 