import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const cartFromLocalStorage =
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("cart"))) ||
    [];

  const [ cartItems, setCartItems ] = useState(cartFromLocalStorage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [ cartItems ]);

  const totalSum = cartItems.reduce((acc, item) => acc + item.amount * item.price, 0);
  const totalQty = cartItems.reduce((acc, item) => acc + item.amount, 0);

  function addToCart(clickedItem) {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [ ...prev, { ...clickedItem, amount: 1 } ];
    });
  };

  function removeFromCart(id) {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [ ...acc, { ...item, amount: item.amount - 1 } ];
        } else {
          return [ ...acc, item ];
        }
      }, [])
    );
  };

  function cleanCart() {
    setCartItems([])
  };


  return (
    <CartContext.Provider value={ { addToCart, removeFromCart, cartItems, totalSum, totalQty, cleanCart } }>
      { children }
    </CartContext.Provider>
  )
}
