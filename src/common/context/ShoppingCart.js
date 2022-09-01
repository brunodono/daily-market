import { createContext, useContext, useEffect, useState } from "react";
import { usePaymentContext } from "./Payment";
import { UserContext } from "./User";

export const ShoppingCartContext = createContext();
ShoppingCartContext.displayName = "Cart";

export const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [amountProducts, setAmountProducts] = useState(0);
    const [totalPriceCart, setTotalPriceCart] = useState(0);
    return (
        <ShoppingCartContext.Provider 
        value={{ 
            shoppingCart, 
            setShoppingCart, 
            amountProducts, 
            setAmountProducts,
            totalPriceCart,
            setTotalPriceCart
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCartContext = () => {
    const { 
        shoppingCart, 
        setShoppingCart, 
        amountProducts, 
        setAmountProducts,
        totalPriceCart,
        setTotalPriceCart
    } = useContext(ShoppingCartContext);
    const {paymentMethod} = usePaymentContext();
    const {setBalance} = useContext(UserContext);

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

    function makePurchase() {
        setShoppingCart([]);
        setBalance((currentBalance)=> currentBalance - totalPriceCart)

    }

    useEffect(()=>{
        const { newQuantity, newTotal } = shoppingCart.reduce((counter, product) => 
        ({
            newQuantity: counter.newQuantity + product.quantity,
            newTotal: counter.newTotal + (product.price * product.quantity)
        }), {
            newQuantity: 0,
            newTotal: 0
        });
        setAmountProducts(newQuantity);
        setTotalPriceCart(newTotal * paymentMethod.fees);
    }, [shoppingCart, setAmountProducts, setTotalPriceCart, paymentMethod]);

    return {
        shoppingCart, 
        setShoppingCart, 
        addProduct, 
        removeProduct,
        amountProducts,
        setAmountProducts,
        totalPriceCart,
        makePurchase        
    }
}