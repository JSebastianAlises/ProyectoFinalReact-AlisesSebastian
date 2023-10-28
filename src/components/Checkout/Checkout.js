import { useContext, useState } from "react"
import "./Checkout.css"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';

function Checkout () {

    const { carrito, setCarrito, precioTotal } = useContext(CartContext)

    /* CONSTANTES PARA TRAER DATOS DE FIRESTORE Y GENERAR UNA NUEVA COLECCION */
    const db = getFirestore(); 
    const ordenColeccion = collection(db, "orden") 

    /* ESTADOS PARA LA GENERACION DE LA ORDEN */
    const [usuario, setUsuario] = useState({})
    const [validacionEmail, setValidacionEmail] = useState("")
    const [myID, setMyID] = useState("");
    const [ordenFinalizada, setOrdenFinalizada] = useState([])

    const datosComprador = (e) => {
        setUsuario ({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    /* ESTADO PARA GENERAR CONDICIÓN ANTE LA COMPRA DEL CARRITO Y MOSTRAR ID DE COMPRA LUEGO DE FINALIZAR LA MISMA */
    const [compraFinalizada, setCompraFinalizada] = useState (true)

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(usuario.nombre && usuario.numero && usuario.email) {
            console.log("usuario")
            let orden ={
                usuario:usuario,
                productos:carrito,
                total:precioTotal,
                fecha:serverTimestamp()
            }
            addDoc(ordenColeccion, orden).then(({ id }) => { setMyID (id) }); 
            setOrdenFinalizada(orden)
            setCompraFinalizada(false)
            setCarrito ([])
        } else {
            Swal.fire({
                text: 'Completa todos los campos',
                customClass: {
                  popup: 'my-popup-class',
                  content: 'my-content-class',
                  confirmButton: 'my-confirm-button-class',
                },
                confirmButtonColor: '#d45522',
                width: '300px', 
              });
        }
    }   

    return (
        <div>
            {compraFinalizada ? (
                <div>
                    <form className="contenedor-compra-iniciada" onSubmit={finalizarCompra}>
                        <h2>Completar con tus datos</h2>
                        <div>
                            <label>Nombre completo</label>
                            <input type="text" placeholder="nombre: Sebastian" onChange={datosComprador} name="nombre"></input>
                        </div>
                        <div>
                            <label>Numero de teléfono</label>
                            <input type="number" placeholder="número: 35112312312" onChange={datosComprador} name="numero"></input> 
                        </div>
                        <div>
                            <label>Dirección de email</label>
                            <input type="email" placeholder="email: Sebastian@gmail.com" onChange={datosComprador} name="email"></input>
                        </div>                                         
                        <div>
                            <label>Confirma tu email</label>
                            <input type="email" placeholder="email: Sebastian@gmail.com" name="email" onChange={((e) => setValidacionEmail(e.target.value))}></input> 
                        </div>
                        <div className="finalizar-compra">
                            <button type="submit" disabled={validacionEmail !== usuario.email}>
                                Finalizar compra
                            </button>
                        </div>
                    </form>
                </div>
            ):(    
                <div className="contenedor-compra-finalizada">
                    <h2>Gracias por tu compra</h2>
                    <p className="id-de-compra">Tu orden para retirar es:<span>{myID}</span></p>
                    <p>Compraste los siguientes productos</p>
                    <div className="contenedor-productos-comprados">
                    {ordenFinalizada.productos.map((producto, index) => (
                        <div key={index} className="tarjeta-producto-comprado">
                            <h2> {producto.titulo}</h2>
                            <img src={producto.img} alt={producto.titulo}/>
                            <p>Cantidad comprada: {producto.cantidad}</p>
                        </div>
                    ))}
                    </div>
                    <p className="precio-final">Abonaste ${ordenFinalizada.total}</p>
                </div>
            )}
        </div>
    )
}

export default Checkout