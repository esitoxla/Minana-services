import React from 'react'
import {CartContext} from '../helpers/contextSetUp.js'  
import { useContext } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";



function CartItem({product}) {
    const {removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
  return (
    <div className='flex items-center justify-between gap-4 p-4 border-b border-gray-200'>
    <div className='w-2/6 flex items-center'>
    <div>
        <img src={product.image} alt={product.name} className='w-20 h-20 object-cover rounded-md mr-4' />
        </div>
    {product.name}</div>
    <div className='w-1/6'>GHc{product.price.toFixed(2)}</div>
    <div className='w-1/6 text-xl'>
    <button className='text-2xl px-4 ' onClick={() => decreaseQuantity(product.id)}>-</button>
    {product.quantity}
    <button className='text-2xl px-4 ' onClick={() => increaseQuantity(product.id)}>+</button>
    </div>
    <div className='w-1/6'>GHc{(product.price * product.quantity).toFixed(2)}</div>
    <div className='w-1/6'>
    <button onClick={() => removeFromCart(product.id)} className='text-red-500 hover:text-red-700'><RiDeleteBin6Line /></button>
    </div>
    </div>
  )
}

export default CartItem