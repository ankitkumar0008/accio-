import React from 'react'
import { useState } from 'react'
import { CartContext } from './CartContext';

const CartProvider = ({children}) => {
    let[cart,setCart] = useState([]);
    function addItem(item){
        setCart([...cart,item]);
    }
    function removeItem(id){
        setCart(cart.filter((i)=>i.id !==id));
    }
  return (
   <CartContext.Provider value={{cart,addItem,removeItem}}>{children}</CartContext.Provider>
  )
}

export default CartProvider
