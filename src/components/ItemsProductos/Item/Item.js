import "./Item.css"
import BotonDetalles from "../../Botones/BotonDetalles/BotonDetalles"

function Item ({titulo, tipo, img, productoId}) {

    return(
        <div className="tarjeta-de-producto">
            <h2>
                {titulo}
                {tipo}
            </h2>
            <img src={require(`../../../imagenes/Productos/${img}.jpg`)} alt={titulo}/>
            <BotonDetalles productoId={productoId}/>
        </div>
    )
}

export default Item

