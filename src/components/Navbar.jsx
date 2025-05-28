import React, { useState } from 'react'
import '../navbar.css'

function Nav({ onCarritoClick }) {
  return (
    <nav className='nav'>
      <a href="#">Sección 1</a>
      <a href="#">Sección 2</a>
      <a href="#">Sección 3</a>
      <a href="#">Sección 4</a>
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