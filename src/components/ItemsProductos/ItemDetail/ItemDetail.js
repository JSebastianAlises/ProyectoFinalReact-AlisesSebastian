import "./ItemDetail.css"
import BotonContador from "../../Botones/BotonContador/BotonContador"
import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

function ItemDetail ({producto, productoId}) { /* Tuve que traer como parametro PRODUCTOID */

    const { agregarProducto } = useContext (CartContext);    

    const [mostrarFinalizarCompra, setMostrarFinalizarCompra] = useState(false);

    const handleAgregarProducto = (cantidad) => {
        agregarProducto({ titulo, precio, img, stock, productoId, cantidad });
        setMostrarFinalizarCompra(true); // Actualiza el estado a true después de agregar el producto
    };

    if (!producto) {
        return <h2>Cargando producto...</h2>;
    }

    const { titulo, img, precio, stock } = producto;

    return (
        <>
            <div className="tarjeta-de-detalles">    
            <h2>
                {titulo}
            </h2>
            <img src={img} alt={titulo}/>
            <p>
                $ {precio}
            </p>
            <p>
                {stock}
            </p>
                {mostrarFinalizarCompra ? (
                    <NavLink to={`/carritodecompras`}>
                        <button className="link-tienda">
                            Finalizar compra
                        </button>
                    </NavLink>
                ) : (
                    <BotonContador 
                        stock={stock} 
                        onAgregar={(cantidad) => handleAgregarProducto(cantidad)} 
                    /> 
                )}
            </div>
            <div>
            <NavLink to={`/`}>
                <button className="link-tienda">
                    Volver a la tienda
                </button>
            </NavLink>
            </div>
        </>
    )
}

export default ItemDetail