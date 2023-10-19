import "./Item.css"
import BotonDetalles from "../../Botones/BotonDetalles/BotonDetalles"

function Item ({titulo, img, productoId}) {

    return(
        <div className="tarjeta-de-producto">
            <h2>
                {titulo}
            </h2>
            <img src={img} alt={titulo}/>
            <BotonDetalles productoId={productoId}/>
        </div>
    )
}

export default Item

