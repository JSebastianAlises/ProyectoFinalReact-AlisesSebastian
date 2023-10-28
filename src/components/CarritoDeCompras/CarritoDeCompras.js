import "./CarritoDeCompras.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom"
import ProductosCarrito from "../ProductosCarrito/ProductosCarrito"

function CarritoDeCompras () {
    
    const { carrito, limpiarCarrito, cantidadTotal, precioTotal } = useContext(CartContext)

    return (
        <div>
            <h1>CARRITO DE COMPRAS</h1>
            {carrito.length === 0 ? ( 
                <div>
                    <h2>No tenes productos agregados</h2>
                    <NavLink to={"/"} className="botones-carrito">
                        <button>
                            Volver a la tienda
                        </button>
                    </NavLink>
                </div>
            ) : (
                <div>
                    <div className="contenedor-tarjeta-carrito">
                        <ProductosCarrito/> 
                    </div>
                    <div className="carrito-totales">
                        <h2>Total de productos: {cantidadTotal}</h2>
                        <h2>Total : ${precioTotal}</h2>
                        <div className="botones-carrito">
                            <button onClick={limpiarCarrito} >
                                Vaciar carrito
                            </button>
                            <NavLink to={"/checkout"}>
                                <button>
                                    Comprar
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CarritoDeCompras