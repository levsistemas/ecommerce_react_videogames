import React, { useState, useContext } from 'react'
import CartContext from './CartContext'

function WindowCart({onAbrir, manejarCantidad}) {
  const {cart} = useContext(CartContext)
  return (
    <div className={onAbrir ? 'modalcart' : 'hidecart'}>
      <h1 className='cart'>El Carrito</h1>
      {cart.length > 0 ? (<div className='cartitems'>{cart.map((item) => (<div key={item.id} className='cartitem'> <h3>{item.titulo} - ${item.precio*item.cantidad} - Cantidad: {item.cantidad}</h3><input manejarCantidad={manejarCantidad - 1} className='botones' type="button" value="-" /><input className='botones' type="button" value="+" /><input className='botones' type="button" value="D" /></div>))}</div>) : (<h1>Tu carrito esta vacío</h1>)}
      <input type="button" value=">" onClick={onAbrir} className='hidewc' />
    </div>
  )
}

export default WindowCart