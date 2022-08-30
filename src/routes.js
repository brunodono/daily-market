import Login from 'pages/Login';
import Market from 'pages/Market';
import ShoppingCart from 'pages/ShoppingCart';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



export default function Router() {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0)
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login name={name} setName={setName} balance={balance} setBalance={setBalance} />
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

