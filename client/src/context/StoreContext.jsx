import { createContext, useState } from "react"
import { food_list } from "../assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId))
    }
    
    const contextValue = {
        food_list,
        cart,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider