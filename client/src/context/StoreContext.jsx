import { createContext, useState, useEffect } from "react"; // Add missing imports
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({...prev, [itemId]: 1}));
    }
    else {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }
  }

  const removeFromCart = (itemId) => { 
    if (cartItems[itemId] === 1) {
      // Remove item completely if count becomes 0
      const newCartItems = {...cartItems};
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    } else {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }
  }
  
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  }
  
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;