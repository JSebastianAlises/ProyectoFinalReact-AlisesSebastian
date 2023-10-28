import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import "./CartContext.css"

export const CartContext = createContext ()

export const CartProvider = ({ children }) => {
    /* ESTADO DEL CARRITO DE COMPRAS */
    const [carrito, setCarrito] = useState ([]) 

    /* APLICADA EN ITEMDETAILCONTAINER PARA AGREGAR PRODUCTOS AL CARRITO*/
    const agregarProducto = (nuevoProducto) => { 
        const productoExistente = carrito.find(prod => prod.productoId === nuevoProducto.productoId);
        if (productoExistente) {
            const newCart = carrito.map(prod =>
                prod.productoId === nuevoProducto.productoId ? { ...prod, cantidad: prod.cantidad + nuevoProducto.cantidad } : prod
            );
            setCarrito(newCart);
        } else {
            setCarrito(prevCart => [...prevCart, { ...nuevoProducto, cantidad: nuevoProducto.cantidad }]);
        }
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 700,
            width: 150,
            customClass: {
                title: 'my-title-class',
                icon: 'my-icon-class',
              },
          })
    };

    /* APLICADA EN CARRITO DE COMPRAS POR CADA PRODUCTO AGREGADO*/
    const borrarProducto = (index) => {
        const carritoActualizado = carrito.filter (prod => prod.productoId !== carrito[index].productoId)
        setCarrito(carritoActualizado) 
   }

    const limpiarCarrito = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Eliminarás todos los discos seleccionados",
            icon: 'warning',
            showCancelButton: true,
            background: "#808080",
            color:"#fff",
            confirmButtonColor: '#d45522',
            cancelButtonColor: '#d45522',
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                background: "#808080",
                color:"#fff",
                title: 'Discos eliminados',
                text:'Si lo deseas, podras volver a la tienda a elegir de nuevo',
                icon: 'success',
                confirmButtonText: 'De acuerdo',
                confirmButtonColor: '#d45522',
              })
              setCarrito ([])
            }
          })
    }
        
    /* BOTONES DE RESTAR Y SUMAR EN CARRITO DE COMPRAS */
    const manejarCantidad = (id, operacion) => {
        const actualizarCarrito = carrito.map((prod) => {
            if (prod.productoId === id) {
                let actualizarCarrito = prod.cantidad;
                if (operacion === "incremento") {
                    if (prod.cantidad < prod.stock) { 
                        actualizarCarrito += 1;
                    }
                } else if (operacion === "decremento") {
                    if (prod.cantidad > 1) {
                        actualizarCarrito -= 1;
                    }
                }
                return { ...prod, cantidad: actualizarCarrito };
            }
            return prod;
        });
        setCarrito(actualizarCarrito);
    };

    /* CALCULO DE TOTALES CARRITO DE COMPRAS Y CARTWIDGET */
    const cantidadTotal = carrito.reduce ((acc, curr) => {    
        return acc + curr.cantidad
    },0);  

    const precioTotal = carrito.reduce ((acc, curr) => {    
        return acc + curr.cantidad * curr.precio
    },0);

    return (
        <CartContext.Provider value={{ agregarProducto, carrito, setCarrito, limpiarCarrito, borrarProducto, cantidadTotal, precioTotal, manejarCantidad }} >
            { children }
        </CartContext.Provider>
    )
}