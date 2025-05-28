import {React, createContext} from 'react'

const CartContext = createContext ({
  cart: [],
  addToCart: () => {},
});

export default CartContext
