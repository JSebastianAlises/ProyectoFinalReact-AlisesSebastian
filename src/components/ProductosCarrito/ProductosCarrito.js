import { useContext } from "react";
import "./ProductosCarrito.css"
import { CartContext } from "../../context/CartContext";

function ProductosCarrito () {
     
    const { carrito, manejarCantidad, borrarProducto } = useContext(CartContext)

    return ( 
        carrito.map((producto, index) => (
            <div key={index} className="tarjeta-carrito">
            <img src={producto.img} alt={producto.titulo}/>
            <h2>{producto.titulo}</h2>
            <p>${producto.precio}</p>
            <p>Cantidad</p>  
            <div className="carrito-botones-disco">
                <button onClick={() => manejarCantidad(producto.productoId, "decremento")}> - </button>
                <p> {producto.cantidad} </p>
                <button onClick={() => manejarCantidad(producto.productoId, "incremento")}> + </button>
            </div>            
            <p>Subtotal: ${producto.cantidad * producto.precio}</p>              
            <button className="boton-borrar-producto" onClick={() => borrarProducto(index)}> X </button>
            </div>
        ))
    );
}

export default ProductosCarrito

