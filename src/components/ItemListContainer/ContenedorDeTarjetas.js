import KitchenSinkExample from "./ItemListContainer";
import "./ContenedorDeTarjetas.css"

function ContenedorDeTarjetas () {
    return (
        <div className="contenedor-de-tarjetas">
            <KitchenSinkExample imagen="1" titulo="ESQUIVANDO CHARCOS" precio="1500" comprar="Agregar al carrito" />
            <KitchenSinkExample imagen="2" titulo="ADONDE ME LLEVA LA VIDA" precio="2500" comprar="Agregar al carrito" />
            <KitchenSinkExample imagen="3" titulo="BAILANDO EN UNA PATA" precio="3500" comprar="Agregar al carrito" />
            <KitchenSinkExample imagen="4" titulo="DESPEDAZADO POR MIL PARTES" precio="4500" comprar="Agregar al carrito" />
        </div>
    )
}

export default ContenedorDeTarjetas