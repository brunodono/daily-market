import Login from 'pages/Login';
import Market from 'pages/Market';
import ShoppingCart from 'pages/ShoppingCart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'common/context/User';
import { ShoppingCartProvider } from 'common/context/ShoppingCart';

export default function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <UserProvider>
                    <Route exact path="/">
                        <Login />
                    </Route>

                    <ShoppingCartProvider>
                        <Route path="/market">
                            <Market />
                        </Route>
                    </ShoppingCartProvider>


                </UserProvider>
                <Route path="/shoppingcart">
                    <ShoppingCart />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

