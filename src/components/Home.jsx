import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import '../App.css'
import Header from './Header'
import Container from './Container'
import WindowCart from './WindowCart'
import Footer from './Footer'
import CartContext from './CartContext'
import Login from './Login'

function Home() {
  
  const [mostrarCarrito,setMostrarCarrito] = useState(false)
  const [cart, setCart] = useState([])
  const [cantidad, setCantidad] = useState(1)

  const manejarCantidad = () => {
    setCantidad(cantidad - 1)
  }

  const toggleCarrito = ()=> {
    setMostrarCarrito(estado => !estado)
  }

  const incrementarCarrito = (productId) => {
      setCart(cart.map(item => {
         return item.id===productId ? {...item, cantidad:item.cantidad+1} : item
      }))
  }

  const decrementarCarrito = (productId) => {
      setCart(cart.map(item => {
         return item.id===productId && item.cantidad > 1 ? {...item, cantidad:item.cantidad-1} : item
      }))
  }

  const eliminarProductoCarrito = (productId) => {
    setCart(cart.filter(item => item.id!==productId ))
  }

  const limpiarCarrito = () => {
    setCart([])
  }

  const addToCart = (product) => {
    const productoExistente = cart.find(item => item.id === product.id)
    if(productoExistente) {
      setCart(cart.map(item => item.id === product.id ? {...item, cantidad: item.cantidad + 1} : item))
    } else {
      setCart([...cart, {...product, cantidad: product.cantidad}])
    }
  }

  return (
    <CartContext.Provider value={{cart: cart, addToCart: addToCart}}>
    <Header onCarritoClick={toggleCarrito} onAbrir={toggleCarrito}/>
    <h1 className='titulo'>Bienvenidos al Club de los Videojuegos</h1>
    {mostrarCarrito && (<WindowCart aumentarCantidadCarrito={incrementarCarrito} disminuirCantidadCarrito={decrementarCarrito} emptyCart={limpiarCarrito} eliminarObjetoCarrito={eliminarProductoCarrito} onAbrir={toggleCarrito} className={mostrarCarrito ? 'modalcart' : 'hidecart'}/>)}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Container manejarCantidad={manejarCantidad}/>} Productos />
            <Route path="/ubicacion" element={<ubicacion/>} Donde estamos />
            <Route path="/nosotros" element={<about/>} Quienes Somos />
            <Route path="/contacto" element={<contacto/>} Contacto />
            <Route path="/login" element={<Login/>} Inicio de sesion />
        </Routes>
      </BrowserRouter>
      {/* <Container manejarCantidad={manejarCantidad} /> */}
    <Footer />
    </CartContext.Provider>
  )
}

export default Home;