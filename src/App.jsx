import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home'
import Login from './components/Login'
import Header from './components/Header'
import './index.css'

function App(){
  const [verCarrito, setVerCarrito] = useState(false)

  // const mostrarCarrito = () => {
  //   document.getElementById('carritomodal').toggle('hidecart')
  //   setVerCarrito(!verCarrito)
  // }

  return (
    <>
    <Home/>
    {/* <Header onCarritoClick={mostrarCarrito}/> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} Productos />
        <Route path="/ubicacion" element={<ubicacion/>} Donde estamos />
        <Route path="/nosotros" element={<about/>} Quienes Somos />
        <Route path="/contacto" element={<contacto/>} Contacto />
        <Route path="/login" element={<Login/>} Inicio de sesion />
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App