import Login from 'pages/Login';
import Market from 'pages/Market';
import ShoppingCart from 'pages/ShoppingCart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'common/context/User';
import { ShoppingCartProvider } from 'common/context/ShoppingCart';
import { PaymentProvider } from 'common/context/Payment';

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
                        <PaymentProvider>
                            <Route path="/shoppingcart">
                                <ShoppingCart />
                            </Route>
                        </PaymentProvider>
                    </ShoppingCartProvider>
                </UserProvider>

            </Switch>
        </BrowserRouter>
    )
}

