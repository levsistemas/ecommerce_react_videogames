import React from 'react'
import Products from './Products'
import productosVideojuegos from './Product'

const Container = (manejarCantidad) => {
  return (
    <main className='main'>
      {productosVideojuegos.map((items, index) => (
          <Products key={index} item={items} manejarCantidad={manejarCantidad} />
      ))}
    </main>
  )
}

export default Container
