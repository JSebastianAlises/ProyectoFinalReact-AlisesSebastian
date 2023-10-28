import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Item from "../Item/Item"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargandoProductos, setcargandoProductos] = useState(false);
  const { categoriaId } = useParams();

  const db = getFirestore();

  const obtenerProductos = async (categoriaId) => {
    try {
      setcargandoProductos(true);
      let productosData = [];
      if (categoriaId) {
        const categoriaDeProductos = query(collection(db, "productos"), where("categoria", "==", categoriaId));
        const consultaDocumentos = await getDocs(categoriaDeProductos);
        consultaDocumentos.forEach((doc) => {
          productosData.push({ id: doc.id, ...doc.data() });
        });
      } else {
        const consultaDocumentos = await getDocs(collection(db, "productos"));
        consultaDocumentos.forEach((doc) => {
          productosData.push({ id: doc.id, ...doc.data() });
        });
      }
      setProductos(productosData);
      setcargandoProductos(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProductos(categoriaId);
  }, [categoriaId]);

  if (cargandoProductos) {
    return <h2>Cargando productos...</h2>;
  }
  
  const titulo = categoriaId ? categoriaId.replace().toUpperCase() : "PRODUCTOS";
  
  return (
    <div>
      <h1>{titulo}</h1>
      <div className="contenedor-de-tarjetas">
      {
        productos.map(
          prod => <Item key={prod.id} {...prod} productoId={prod.id} /> 
        ) 
      }
    </div>
    </div>
  )
}

export default ItemListContainer

