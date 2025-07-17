import React from 'react'
import {CartContext} from '../helpers/contextSetUp.js'  
import { useContext } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";



function CartItem({product}) {
    const {removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
  return (
    <div className="flex items-center justify-between gap-2 p-2 border-b border-gray-200 text-sm">
      <div className="w-[25%] flex items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-md mr-1"
        />
        <span>{product.name}</span>
      </div>

      <div className="w-[15%]">GHc{product.price.toFixed(2)}</div>

      <div className="w-[15%] text-sm flex items-center ">
        <button
          className="text-lg px-2"
          onClick={() => decreaseQuantity(product.id)}
        >
          -
        </button>
        {product.quantity}
        <button
          className="text-lg px-2"
          onClick={() => increaseQuantity(product.id)}
        >
          +
        </button>
      </div>

      <div className="w-[15%]">
        GHc{(product.price * product.quantity).toFixed(2)}
      </div>

      <div className="w-[10%] flex justify-center">
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default CartItem