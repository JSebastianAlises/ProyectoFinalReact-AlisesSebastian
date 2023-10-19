import "./BotonDetalles.css"
import { NavLink } from 'react-router-dom'

function BotonDetalles ({ productoId }) {
    return (
        <div className="contenedor-de-boton">
            <NavLink to={`/productos/${productoId}`}>
            <button>
                Ver detalles
            </button>
            </NavLink>
        </div>
    )
}

export default BotonDetalles