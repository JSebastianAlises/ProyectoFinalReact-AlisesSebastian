import { createContext, useEffect, useState } from "react";

export const CartContext = createContext ()

export const CartProvider = ({ children }) => {     /* De esta manera, envio toda la información referente al CHILDREN y constantes anteriores sin tener que volver a escribirlas en la APP, todos los children los informo a través del value */

    /* Estado que ira cambiando en función de lo que vaya agregando al carrito */
    const [carrito, setCarrito] = useState ([]) 

    const agregarProducto = (nuevoProducto) => { /* Funcion agregada en ItemDetailContainer */
        const productoExistente = carrito.find(prod => prod.productoId === nuevoProducto.productoId);
        if (productoExistente) {
            const newCart = carrito.map(prod =>
                prod.productoId === nuevoProducto.productoId ? { ...prod, cantidad: prod.cantidad + nuevoProducto.cantidad } : prod
            );
            setCarrito(newCart);
        } else {
            setCarrito(prevCart => [...prevCart, { ...nuevoProducto, cantidad: nuevoProducto.cantidad }]);
        }
    };

    /* Aplicada en el carrito de compras */
    const borrarProducto = (index) => {
        const carritoActualizado = carrito.filter (prod => prod.productoId !== carrito[index].productoId)
        setCarrito(carritoActualizado) 
   }

    /* La aplique únicamente en Carrito de compras */
    const limpiarCarrito = () => { 
        setCarrito ([])
    }

    return (
        <CartContext.Provider value={{ agregarProducto, carrito, setCarrito, limpiarCarrito, borrarProducto }} >
            { children }
        </CartContext.Provider>
    )
}