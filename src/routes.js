import Login from 'pages/Login';
import Market from 'pages/Market';
import ShoppingCart from 'pages/ShoppingCart';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserContext } from 'common/context/User';



export default function Router() {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0)
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <UserContext.Provider value={{ name, setName, balance, setBalance }}>
                <Login />
                </UserContext.Provider>
            </Route>
            <Route path="/market">
                <Market />
            </Route>
            <Route path="/shoppingcart">
                <ShoppingCart />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

