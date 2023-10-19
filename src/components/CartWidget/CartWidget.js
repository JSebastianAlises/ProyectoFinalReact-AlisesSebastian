import "./CartWidget.css"
import imagenCarrito from "../../imagenes/imagencarrito.jpg"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget () {

    const {carrito} = useContext(CartContext);

    /* Función para informar la cantidad de productos en el carrito */
    const cantidad = carrito.reduce ((acc, curr) => {    
        return acc + curr.cantidad
    },0);  

    return (
        <div className="carrito-contenedor">
            <a>
                <img className="carrito-imagen" src={imagenCarrito} alt="Imagen del carrito" />
                <div>
                    <span className="carrito-numero">
                        {cantidad > 0 ? cantidad : 0}                       
                    </span>
                </div>
            </a>
        </div>
    )
}

export default CartWidget; 