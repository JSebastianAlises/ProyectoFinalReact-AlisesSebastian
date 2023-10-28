import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import "./ItemDetailContainer.css"


function ItemDetailContainer () {

    const { productoId } = useParams();

    const [producto, setProducto] = useState(null); 

    useEffect(() => {
        const obtenerProducto = async () => {
        try {
            const db = getFirestore();
            const idDocumento = doc(db, "productos", productoId);
            const datosDocumento = await getDoc(idDocumento);
            if (datosDocumento.exists()) {
              const productoData = datosDocumento.data(); 
              setProducto(productoData); 
            } else {
              console.log("El documento no existe");
            }
        } catch (error) {
            console.error("Error al obtener el documento:", error);
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
            <h2>Cargando producto...</h2>
        }
      </div>
    );
  };

export default ItemDetailContainer