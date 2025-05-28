import React, { useContext,useState } from 'react'
import CartContext from './CartContext'

const Products = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    const {cart, addToCart} = useContext(CartContext)
    const [mostrarTexto, setMostrarTexto] = useState(false)

    const incrementar = () => {
        setCantidad(cantidad + 1);
    }

    const decrementar = () => {
        setCantidad(cantidad - 1)
    }

    const agregarToCart = () => {
        setCantidad(cantidad)
        const cantidadJuego=setCantidad(cantidad)
        console.log(`Agregando info...\n\n${item.titulo}\n\n$${item.precio*cantidad}\n`)
    }

    const agregarCarrito = () => {
        const productoConCantidad = {...item, cantidad}
        addToCart(productoConCantidad)
    }

    const showText = () => {
        setMostrarTexto(true)

        const hideText = setTimeout( () => {
            setMostrarTexto(false)
        }, 2000)
    }

    return (
    <div className='producto'>
        <div key={item.id} className='cards'>
            <div className='title'>
                <h1>{item.id} - {item.titulo}</h1>
            </div>
            <div className='description'>
                <h2>{item.descripcion}</h2>
            </div>
            <div className='price'>
                <h3>${item.precio}</h3>
            </div>
            <div className='control'>
                <label id={"product_" + item.id}>Cantidad: {cantidad}</label>
                <input id={"product_rest_" + item.id} onClick={() => {decrementar();manejarCantidad();}} disabled={cantidad === 1} type="button" value="-" className='botones' />
                <input id={"product_plus_" + item.id} onClick={() => {incrementar()}} type="button" value="+" className='botones' />
            </div>
            <div className='btn_cart'>
                <input id={"add_button_" + item.id} type="button" onClick={(e) => {agregarToCart(), agregarCarrito(), showText()}} disabled={cantidad === 0} value="Agregar al carrito" />
                {mostrarTexto && (<p className='alinear-texto'>¡Producto añadido correctamente!</p>)}
            </div>
        </div>
    </div>)
}

export default Products