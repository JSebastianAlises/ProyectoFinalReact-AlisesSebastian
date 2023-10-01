import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductosById } from "../../Productos/Productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"


function ItemDetailContainer () {
    const { productoId } = useParams();
    
    const [producto, setProducto] = useState(null)

    useEffect (() => {
        getProductosById (parseInt(productoId))
            .then (response => {
                setProducto (response)
            })    
            .catch (error => {
                console.log(error)
            })
    }, [])
    
    return (
        <div className="contenedor-item-detalles">
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer