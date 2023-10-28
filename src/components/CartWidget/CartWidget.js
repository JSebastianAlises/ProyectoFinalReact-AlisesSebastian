import "./CartWidget.css"
import imagenCarrito from "../../imagenes/imagencarrito.jpg"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget () {

    const { cantidadTotal } = useContext(CartContext);

    return (
        <div className="carrito-contenedor">
            <a>
                <img className="carrito-imagen" src={imagenCarrito} alt="Imagen del carrito" />
                <div>
                    <span className="carrito-numero">
                        {cantidadTotal > 0 ? cantidadTotal : 0}                       
                    </span>
                </div>
            </a>
        </div>
    )
}

export default CartWidget; 