import { useState } from "react"
import "./BotonContador.css"

function BotonContador({ inicial, stock, onAgregar }) {

    const [cantidad, setCantidad] = useState (inicial)

    const incremento = () => {
        if (cantidad < stock) {
            setCantidad (cantidad + 1)
        }
    }

    const decremento = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1)
        } else {
            setCantidad (0)
        }
    }

    return (
        <div>
            <div className="contenedor-de-botones">
                <button onClick={decremento}> - </button>
                <p> {cantidad} </p>
                <button onClick={incremento}> + </button>
            </div>
            <div className="boton-agregar">
                <button onClick={() => onAgregar(cantidad)} disabled = {!cantidad}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default BotonContador