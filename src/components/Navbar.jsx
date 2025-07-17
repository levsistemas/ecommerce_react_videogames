import React, { useState } from 'react'

import '../navbar.css'
import '../index.css'

function Nav({ onCarritoClick }) {
  return (
    <nav className='nav'>
      <a href="/">Home</a>
      <a href="#">Donde estamos</a>
      <a href="#">Quienes somos</a>
      <a href="#">Contacto</a>
      <a href="/login">Iniciar sesión</a>
      <a href="#" onClick={(e) => {
        e.preventDefault();
        onCarritoClick();
      }}>
        <img src="../src/assets/cart-icon-28356.png" alt="icono carrito" width={"30px"} height={"30px"}/>
      </a>
    </nav>
  )
}

export default Nav