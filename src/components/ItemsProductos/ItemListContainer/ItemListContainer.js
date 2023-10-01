import { useState, useEffect } from "react";
import { getProductos, getProductosByCategory } from "../../Productos/Productos";
import { useParams } from "react-router-dom"
import Item from "../Item/Item"
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([])
  const [cargandoProductos, setcargandoProductos] = useState(true);
  const { categoriaId } = useParams();
  
  useEffect (() => {
    const AllCategory = categoriaId ? getProductosByCategory : getProductos
    setcargandoProductos(true);
    AllCategory (categoriaId)
        .then (response => {
          setProductos (response)
          setcargandoProductos(false);
        })    
        .catch (error => {
            console.log(error)
        })
  }, [categoriaId]) 
  
  if (cargandoProductos) {
    return <h2>Cargando productos...</h2>;
  }

  const titulo = categoriaId ? categoriaId.replace().toUpperCase() : "PRODUCTOS"

  return (
    <div >
      <h1> {titulo} </h1>
      <div className="contenedor-de-tarjetas">
        {productos.map (prod => <Item key={prod.id} {...prod} productoId={prod.id}/> )}
      </div>
    </div>
  )
}

export default ItemListContainer