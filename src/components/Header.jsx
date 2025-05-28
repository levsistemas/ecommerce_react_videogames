import React from 'react'
import Nav from './Navbar'

function Header({onCarritoClick}) {
  return (
    <header className='header'>
      <Nav onCarritoClick={onCarritoClick}/>
    </header>
  )
}

export default Header