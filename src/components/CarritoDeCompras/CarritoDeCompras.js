import "./CarritoDeCompras.css"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom"

function CarritoDeCompras () {
    
    const { carrito, setCarrito, limpiarCarrito, borrarProducto } = useContext(CartContext)

    const cantidadTotal = carrito.reduce ((acc, curr) => {    
        return acc + curr.cantidad
    },0);  

    const precioTotal = carrito.reduce ((acc, curr) => {    
        return acc + curr.cantidad * curr.precio
    },0);

    /* Función para mostrar productos en Carrito, después, la tengo que llamar nuevamente en el mismo */
    const mostrarProductos = carrito.map(prod => {
        return {
          titulo: prod.titulo,
          cantidad: prod.cantidad,
          precio: prod.precio,
          subtotal: prod.cantidad * prod.precio,
          img: prod.img,
          id: prod.productoId
        };
      });

    /* BOTONES DE RESTAR Y SUMAR */

    const manejarCantidad = (id, operacion) => {
        const actualizarCarrito = carrito.map((prod) => {
            if (prod.productoId === id) {
                let actualizarCarrito = prod.cantidad;
                if (operacion === "incremento") {
                    if (prod.cantidad < prod.stock) { /* Aca debería limitar el stock del producto */
                        actualizarCarrito += 1;
                    }
                } else if (operacion === "decremento") {
                    if (prod.cantidad > 1) {
                        actualizarCarrito -= 1;
                    }
                }
                return { ...prod, cantidad: actualizarCarrito };
            }
            return prod;
        });
        setCarrito(actualizarCarrito);
    };

    return (
        <div>
            <h1>CARRITO DE COMPRAS</h1>
            <div className="contenedor-tarjeta-carrito">
                {mostrarProductos.map((producto, index) => (
                    <div key={index} className="tarjeta-carrito">
                    <h2>{producto.titulo}</h2>
                    <img src={producto.img} alt={producto.titulo}/>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p>Subtotal ${producto.subtotal}</p>
                    <div className="carrito-botones-disco">
                        <button onClick={() => manejarCantidad(producto.id, "decremento")}> - </button>
                        <p> {producto.cantidad} </p>
                        <button onClick={() => manejarCantidad(producto.id, "incremento")}> + </button>
                    </div>
                    <button onClick={() => borrarProducto(index)}> X </button>
                    </div>
                ))}
            </div>
            <div className="carrito-totales">
                <h2>Total de productos: {cantidadTotal}</h2>
                <h2>Total : ${precioTotal}</h2>
                <div className="carrito-limpiar">
                    <button onClick={limpiarCarrito}>
                        Limpiar carrito
                    </button>
                    <NavLink to={`/`}>
                        <button>
                            Volver a la tienda
                        </button>
                    </NavLink>
                </div>
            </div>


            {/* <link to="/checkout"> Checkout </link>  */}
        </div>
    )
}

export default CarritoDeCompras