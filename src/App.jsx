import { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Container from './components/Container'
import WindowCart from './components/WindowCart'
import Footer from './components/Footer'
import CartContext from './components/CartContext'

function App() {
  const [mostrarCarrito,setMostrarCarrito] = useState(false)
  const [cart, setCart] = useState([])
  const [cantidad, setCantidad] = useState(1)

  const manejarCantidad = () => {
    setCantidad(cantidad - 1)
    console.log(setCantidad(cantidad))
  }

  const toggleCarrito = ()=> {
    setMostrarCarrito(estado => !estado)
  }

  const incrementar = () => {
      setCantidad(cantidad + 1);
  }

  const decrementar = () => {
      setCantidad(cantidad - 1)
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
    {mostrarCarrito && (<WindowCart onAbrir={toggleCarrito} className={mostrarCarrito ? 'modalcart' : 'hidecart'}/>)}
    <h1 className='titulo'>Bienvenidos al Club de los Videojuegos</h1>
    <Container manejarCantidad={manejarCantidad} />
    <Footer />
    </CartContext.Provider>
  )
}

export default App