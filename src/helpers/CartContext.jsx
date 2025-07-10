import { useState, useEffect } from 'react';
import { CartContext } from './contextSetUp';

export const CartProvider = ({children}) =>{
  // cartSaved: only id and quantity, synced with localStorage
  const [cartSaved, setCartSaved] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  // cart: full product details + quantity
  const [cart, setCart] = useState([]);



  // Save cartSaved to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartSaved));
  }, [cartSaved]);

  // Fetch product details whenever cartSaved changes
  useEffect(() => {
    const fetchCartProducts = async () => {
      if (!cartSaved.length) {
        setCart([]);
        return;
      }
      try {
        const products = await Promise.all(
          cartSaved.map(async item => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${item.id}`);
            if (!response.ok) return null;
            const product = await response.json();
            return product ? { ...product, quantity: item.quantity } : null;
          })
        );
        setCart(products.filter(Boolean));
      } catch (err) {
        console.error('Failed to fetch cart products:', err);
        // setCart([]);
      }
    };
    fetchCartProducts();
  }, [cartSaved]);

  // Cart operations update cartSaved
  const addToCart = (product) => {
    setCartSaved((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return  prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: product.id, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartSaved((prev) => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartSaved([]);
  };

  const increaseQuantity = (id) => {
  setCartSaved((prev) =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );

  setCart((prev) =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};


 const decreaseQuantity = (id) => {
  setCartSaved((prev) =>
    prev
      .map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );

  setCart((prev) =>
    prev
      .map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};


  const contextData = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity
  };

  return (
    <CartContext.Provider value={contextData}> 
    {children}
    </CartContext.Provider>
  );
}