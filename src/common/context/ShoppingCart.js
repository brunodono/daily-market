import { createContext, useContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();
ShoppingCartContext.displayName = "Cart";

export const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [amountProducts, setAmountProducts] = useState(0);
    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart, amountProducts, setAmountProducts }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartContext = () => {
    const { shoppingCart, setShoppingCart, amountProducts, setAmountProducts} = useContext(ShoppingCartContext);

    function changeQuantity(id, quantity){
        return shoppingCart.map(cartItem => {
            if(cartItem.id === id)
              cartItem.quantity += quantity
               return cartItem
          })
    };

    function addProduct(newProduct){
        const hasProduct = shoppingCart.some(cartItem => cartItem.id === newProduct.id);
        if(!hasProduct){
          newProduct.quantity = 1;
          return setShoppingCart(previousCart => [...previousCart, newProduct]
            )}
            setShoppingCart(changeQuantity(newProduct.id, 1));
        }

    function removeProduct(id) {
        const product = shoppingCart.find((cartItem) => cartItem.id === id);
        const isTheLast = product.quantity === 1;
        if(isTheLast) {
            return setShoppingCart(previousCart => previousCart.filter(cartItem => cartItem.id !== id));
        }
        setShoppingCart(changeQuantity(id, -1));
    }

    useEffect(()=>{
        const newAmount = shoppingCart.reduce((counter, product) => 
        counter + product.quantity, 0);
        setAmountProducts(newAmount);
    }, [shoppingCart, setAmountProducts]);

    return {
        shoppingCart, 
        setShoppingCart, 
        addProduct, 
        removeProduct,
        amountProducts,
        setAmountProducts
    }


}