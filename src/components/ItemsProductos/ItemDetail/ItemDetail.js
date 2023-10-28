import "./ItemDetail.css"
import BotonContador from "../../Botones/BotonContador/BotonContador"
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

function ItemDetail ({producto, productoId}) { 

    const { agregarProducto } = useContext (CartContext);    

    /* CAMBIA AGREGAR CARRITO POR FINALIZAR COMPRA */
    const [mostrarFinalizarCompra, setMostrarFinalizarCompra] = useState(false);

    /* TRAE LA FUNCION QUE AGREGA EL PRODUCTO AL CARRITO Y CAMBIA EL ESTADO PARA QUE APAREZCA FINALIZAR COMPRA */
    const agregarProductoAlCarrito = (cantidad) => {
        agregarProducto({ titulo, precio, img, stock, productoId, cantidad });
        setMostrarFinalizarCompra(true); 
    };

    const { titulo, img, precio, stock } = producto;

    return (
        <>
            <div className="tarjeta-de-detalles">    
                <h2>
                    {titulo}
                </h2>
                <img src={img} alt={titulo}/>
                {mostrarFinalizarCompra ? (
                    <div>
                        <NavLink to={`/carritodecompras`}>
                            <button className="link-tienda">
                                Finalizar compra
                            </button>
                        </NavLink>
                    </div>
                ) : (
                    <div>
                        <p>
                            $ {precio}
                        </p>
                        <BotonContador 
                            stock={stock} 
                            onAgregar={(cantidad) => agregarProductoAlCarrito(cantidad)} 
                        /> 
                    </div>
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