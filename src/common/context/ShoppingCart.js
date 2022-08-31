import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext();
ShoppingCartContext.displayName = "Cart";

export const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartContext = () => {
    const { shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);

    function addProduct(newProduct){
        const hasProduct = shoppingCart.some(cartItem => cartItem.id === newProduct.id);
        if(!hasProduct){
          newProduct.quantity = 1;
          return setShoppingCart(previousCart => [...previousCart, newProduct]
            )}
            setShoppingCart(previousCart => previousCart.map(cartItem => {
              if(cartItem.id === newProduct.id)
                cartItem.quantity += 1
                 return cartItem
    
            }))
        }

    return {
        shoppingCart, setShoppingCart, addProduct
    }
}