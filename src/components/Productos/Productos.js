const productos = [
    {
        id: 1, 
        precio: 1500,
        stock: 5,
        categoria: "discos",
        img: "1",
        titulo: "ESQUIVANDO CHARCOS"
    },
    { id: 2, precio: 2400, stock: 5, categoria: "discos", img: "2", titulo: "A DONDE ME LLEVA LA VIDA" },
    { id: 3, precio: 1070, stock: 5, categoria: "discos", img: "3", titulo: "BAILANDO EN UNA PATA" },
    { id: 4, precio: 2000, stock: 5, categoria: "discos", img: "4", titulo: "DESPEDAZADO POR MIL PARTES" },
    { id: 5, precio: 1100, stock: 5, categoria: "discos", img: "5", titulo: "LA RENGA" },
    { id: 6, precio: 2200, stock: 5, categoria: "discos", img: "6", titulo: "LA ESQUINA DEL INFINITO" },
    { id: 7, precio: 2500, stock: 5, categoria: "discos", img: "7", titulo: "INSOPORTABLEMENTE VIVO" },
    { id: 8, precio: 1000, stock: 5, categoria: "discos", img: "8", titulo: "DOCUMENTO UNICO" },
    { id: 9, precio: 3000, stock: 5, categoria: "discos", img: "9", titulo: "DETONADOR DE SUEÑOS" },
    { id: 10, precio: 4000, stock: 5, categoria: "discos", img: "10", titulo: "TRUENOTIERRA" },
    { id: 11, precio: 5000, stock: 5, categoria: "discos", img: "11", titulo: "ALGUN RAYO" },
    { id: 12, precio: 5500, stock: 5, categoria: "discos", img: "12", titulo: "PESADOS VESTIGIOS" },
    { id: 13, precio: 7000, stock: 5, categoria: "discos", img: "13", titulo: "ALEJADO DE LA RED" },

    {
        id: 14,
        tipo: "buzo1", 
        precio: 1000,
        stock: 3,
        categoria: "ropa",
        img: "buzo1"
    },
    { id: 15, tipo: "buzo2", precio: 1000, stock: 3, categoria: "ropa", img: "buzo2" },
    { id: 16, tipo: "buzo3", precio: 1000, stock: 3, categoria: "ropa", img: "buzo3" },
    { id: 17, tipo: "buzo4", precio: 1000, stock: 3, categoria: "ropa", img: "buzo4" },
    { id: 18, tipo: "gorra1", precio: 1000, stock: 3, categoria: "ropa", img: "gorra1" },
    { id: 19, tipo: "gorra2", precio: 1000, stock: 3, categoria: "ropa", img: "gorra2" },
    { id: 21, tipo: "gorra3", precio: 1000, stock: 3, categoria: "ropa", img: "gorra3" },
    { id: 22, tipo: "gorra4", precio: 1000, stock: 3, categoria: "ropa", img: "gorra4" },
    { id: 23, tipo: "remera1", precio: 1000, stock: 3, categoria: "ropa", img: "remera1" },
    { id: 24, tipo: "remera2", precio: 1000, stock: 3, categoria: "ropa", img: "remera2" },
    { id: 25, tipo: "remera3", precio: 1000, stock: 3, categoria: "ropa", img: "remera3" },
    { id: 26, tipo: "remera4", precio: 1000, stock: 3, categoria: "ropa", img: "remera4" }
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (productos)
        }, 500)
    })
}

export const getProductosByCategory = (categoria) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
        resolve (productos.filter(prod => prod.categoria === categoria))
        }, 500)
    })
}

export const getProductosById = (productosId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (productos.find(prod => prod.id === productosId))
        }, 500)
    })
}
