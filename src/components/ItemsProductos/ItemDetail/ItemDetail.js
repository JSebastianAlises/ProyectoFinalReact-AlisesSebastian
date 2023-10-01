import "./ItemDetail.css"
import BotonContador from "../../Botones/BotonContador/BotonContador"
import { NavLink } from "react-router-dom";

function ItemDetail ({producto}) {

    if (!producto) {
        return <h2>Cargando producto...</h2>;
    }

    const { titulo, tipo, img, precio, stock } = producto;

    return (
        <>
            <div className="tarjeta-de-detalles">    
            <h2>
                {titulo}
                {tipo}
            </h2>
                <img src={require(`../../../imagenes/Productos/${img}.jpg`)} alt={titulo}/>
            <p>
                $ {precio}
            </p>
            <p>
                {stock}
            </p>
            <BotonContador 
            inicial={0} 
            stock={stock} 
            onAgregar={(cantidad) => {
                const mensaje = titulo
                  ? `Agregaste ${cantidad} de discos de ${titulo}`
                  : `Agregaste ${cantidad} ${tipo}`;
                console.log(mensaje);
              }}/> 
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