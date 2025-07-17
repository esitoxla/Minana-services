import { GoArrowLeft } from "react-icons/go";
import { CartContext } from "../helpers/contextSetUp.js";
import { useContext } from "react";
import CartItem from "../components/CartItem.jsx";
import { NavLink } from "react-router";


export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
    console.log(cart);
    
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-semibold ">Your cart</h1>
        <NavLink to="/product">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mt-4 border-2 border-gray-300 px-4 py-2 rounded-md">
            <GoArrowLeft />
            Continue Shopping
          </button>
        </NavLink>
      </div>

      <div>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4 ">
            <div className="flex mt-10 items-center lg:gap-16 gap-6 md:gap-12 lg:p-4 p-2 border-b border-gray-200">
              <p className="uppercase w-[25%] ">Product</p>
              <p className="uppercase w-[15%] ">Price</p>
              <p className="uppercase w-[15%] ">QTY</p>
              <p className="uppercase w-[15%] ">Total</p>
            </div>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
            <div className="flex justify-between gap-4 items-center mt-4">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white mx-3 px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Clear Cart
              </button>
              <div className="flex items-center justify-between flex-col mb-10">
                <span className="text-lg mr-4 font-semibold">
                  Total: GH₵
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
                <NavLink to="checkout">
                  <button className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors mr-4 w-full mt-4">
                    Checkout
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}