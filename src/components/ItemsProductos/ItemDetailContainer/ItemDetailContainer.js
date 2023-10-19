import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductosById } from "../../Productos/Productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, updateDoc, where, writeBatch, getStorage } from 'firebase/firestore'

import "./ItemDetailContainer.css"


function ItemDetailContainer () {

    const { productoId } = useParams();

    const [producto, setProducto] = useState(null); // Estado inicial del producto es null

    useEffect(() => {
        const obtenerProducto = async () => {
        try {
            const db = getFirestore();
            const docRef = doc(db, 'productos', productoId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            const productoData = docSnap.data(); // Obtener los datos del documento
            setProducto(productoData); // Establecer el estado del producto con los datos del documento
            } else {
            console.log('El documento no existe.');
            }
        } catch (error) {
            console.error('Error al obtener el documento:', error);
        }
        };
        obtenerProducto();
    }, [productoId]);    
    
    return (
      <div className="contenedor-item-detalles">
        {
        producto ? 
        <ItemDetail producto={producto} productoId={productoId}/> 
        : 
        <p>Cargando producto...</p>
        }
      </div>
    );
  };

export default ItemDetailContainer