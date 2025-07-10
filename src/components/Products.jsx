import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../helpers/contextSetUp";
import { HashNavigation } from "swiper/modules";
import { NavLink } from "react-router";
// import product1 from "../assets/images/cannedPalmoil.jpeg";
// import product2 from "../assets/images/product2.jpeg";
// import product3 from "../assets/images/product3.jpeg";
// import product4 from "../assets/images/product4.jpeg";
// import product5 from "../assets/images/product5.jpeg";
// import product6 from "../assets/images/product6.jpeg";
// import product7 from "../assets/images/product7.jpeg";
// import product8 from "../assets/images/product8.jpeg";

export default function Products() {
const {cart, addToCart} = useContext(CartContext);
  console.log(cart);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const inCart = (product) => {

    return cart.some((item) => item.id === product.id);
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="py-12 lg:px-16 bg-gray-50 px-8">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
          <h1 className="text-2xl uppercase text-red-500  px-8">Products</h1>
          <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        </div>

        {loading && (
          <p className="text-center text-3xl text-gray-500">
            Loading products...
          </p>
        )}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md shadow-gray-300 rounded-xl overflow-hidden transition-transform hover:-translate-y-1 relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-70 object-contain"
              />
              <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                <span>Instock</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <span className="text-green-500 font-bold">
                    GH₵ {product.price}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 mb-4">
                  {inCart(product) ? <NavLink to="/cart"><button className="w-fit  bg-white border border-green-700 text-green-700 hover:bg-green-100 text-sm py-2 px-4 rounded-md transition font-semibold">
                    Go to cart </button> </NavLink>:
                  <button className="w-2/5 bg-green-800 cursor-pointer hover:bg-green-900 text-white text-sm py-2 px-4 rounded-md transition" 
                  onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>}
                <button className="w-2/5 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 py-2 px-4 rounded-md transition">
                  Learn More
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
