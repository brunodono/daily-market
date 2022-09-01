import { createContext, useContext, useState } from "react";


export const PaymentContext = createContext();
PaymentContext.displayName = "Payment";

export const PaymentProvider = ({ children }) => {
    const paymentMethods = [{
        name: "Debit Card",
        fees: 1,
        id: 1
    },{
        name: "Credit Card",
        fees: 1.3,
        id: 2
    },{
        name: "Voucher",
        fees: 1,
        id: 3
    }];
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0])
    return (
        <PaymentContext.Provider value={{
            paymentMethods,
            paymentMethod,
            setPaymentMethod
        }}>
            { children }
        </PaymentContext.Provider>
    )
}

export const usePaymentContext = () => {
    const { 
        paymentMethods, 
        paymentMethod, 
        setPaymentMethod
    } = useContext(PaymentContext);

    function changePaymentMethod( id ) {
        const currentPayment = paymentMethods.find(payment => payment.id === id);
        setPaymentMethod(currentPayment);
    }

    return {
        paymentMethods,
        paymentMethod,
        changePaymentMethod
    }
}