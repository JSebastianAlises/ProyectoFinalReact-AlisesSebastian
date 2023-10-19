import { useState, useEffect } from "react";
import { getProductos, getProductosByCategory } from "../../Productos/Productos";
import { useParams } from "react-router-dom"
import Item from "../Item/Item"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, updateDoc, where, writeBatch, getStorage } from 'firebase/firestore'
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
        const q = query(collection(db, 'productos'), where('categoria', '==', categoriaId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          productosData.push({ id: doc.id, ...doc.data() });
        });
      } else {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        querySnapshot.forEach((doc) => {
          productosData.push({ id: doc.id, ...doc.data() });
        });
      }
      setProductos(productosData);
      setcargandoProductos(false);
    } catch (error) {
      console.log(error);
    }
  };

  /* INFORMO LAS DIFERENES CATEGORIAS SEGUN LA SELECCIONADA */
  useEffect(() => {
    obtenerProductos(categoriaId);
  }, [categoriaId]);

  if (cargandoProductos) {
    return <h2>Cargando productos...</h2>;
  }
  
  const titulo = categoriaId ? categoriaId.replace().toUpperCase() : 'PRODUCTOS';
  
  return (
    <div>
      <h1>{titulo}</h1>
      <div className="contenedor-de-tarjetas">
      {
      productos.length > 0 ? 
      productos.map(prod => <Item key={prod.id} {...prod} productoId={prod.id} /> ) /* COMO TRAIGO LA INFORMACION */
        : 
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}> {/* SACAR O PONER CLASE SEGÚN QUERRAMOS */}
        <h2>Cargando...</h2>
      </div>
    }
    </div>
    </div>
  )
}

export default ItemListContainer

