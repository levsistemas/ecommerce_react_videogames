import React, { useState, useContext, useEffect } from 'react'
import CartContext from './CartContext'

function WindowCart({onAbrir, manejarCantidad, emptyCart, aumentarCantidadCarrito, disminuirCantidadCarrito, eliminarObjetoCarrito}) {
  const {cart} = useContext(CartContext)
  const totalPrecios = cart.reduce((suma,item) => suma + item.precio*item.cantidad, 0 )

  return (
    <div id='carritomodal' className={onAbrir ? 'modalcart' : 'hidecart'}>
      <h1 className='cart'>El Carrito</h1>
      <div>
        {cart.length > 0 ? (<div className='cartitems'>{cart.map((item) => (<div key={item.id} className='cartitem'> <h3>{item.titulo} - ${item.precio*item.cantidad} - Cantidad: {item.cantidad}</h3><input disabled={item.cantidad < 2} className='botones' type="button" value="-" onClick={()=>{disminuirCantidadCarrito(item.id)}} /><input className='botones' type="button" value="+" onClick={() => {aumentarCantidadCarrito(item.id)}} /><input className='botones' type="button" value="D" onClick={()=> {eliminarObjetoCarrito(item.id)}} /></div>))}</div>) : (<h1>Tu carrito esta vacío</h1>)}
      </div>
      <div className='cleancart'>
        <input type="button" value="Vaciar carrito" className='boton_vaciar_carrito' onClick={emptyCart} />
      </div>
      <div>
         <h1>Total: ${totalPrecios}</h1>
      </div>
      <input type="button" value=">" onClick={onAbrir} className='hidewc' />

    </div>
  )
}

export default WindowCart