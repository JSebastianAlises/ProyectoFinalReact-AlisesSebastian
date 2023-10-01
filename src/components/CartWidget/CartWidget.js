import "./CartWidget.css"
import cart from "../../imagenes/imagencarrito.jpg"

function CartWidget () {
    return (
        <div className="carrito-contenedor">
            <a>
                <img className="carrito-imagen" src={cart} alt="Imagen del carrito" />
                <div>
                    <span className="carrito-numero">0</span>
                </div>
            </a>
        </div>
    )
}

export default CartWidget; 