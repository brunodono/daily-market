import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { usePaymentContext } from 'common/context/Payment';
import { useShoppingCartContext } from 'common/context/ShoppingCart';
import { UserContext } from 'common/context/User';
import Product from 'components/Product';
import { useContext, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Back, TotalContainer, PaymentContainer} from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';

function ShoppingCart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { shoppingCart, totalPriceCart, makePurchase } = useShoppingCartContext();
  const { balance = 0 } = useContext(UserContext);
  const { paymentMethods, paymentMethod, changePaymentMethod } = usePaymentContext();
  const history = useHistory();
  const total = useMemo(() => balance - totalPriceCart, [balance, totalPriceCart]);
  return (
    <Container>
      <Logo />
      
      <Back onClick={() => history.goBack()} />
      <h2>
        Shopping Cart
      </h2>
      {shoppingCart.map(product => (
        <Product 
        {...product}
        key={product.id}
        />
      ))}
      <PaymentContainer>
        <InputLabel> Payment Method </InputLabel>
        <Select value={paymentMethod.id} onChange={(event) => changePaymentMethod(event.target.value)}>
          {paymentMethods.map((payment)=>(
            <MenuItem value={payment.id} key={payment.id}>
            {payment.name}
            </MenuItem>
          ))}

        </Select>
      </PaymentContainer>
      <TotalContainer>
          <div>
            <h2>Total in the Cart: </h2>
            <span>€$ {totalPriceCart.toFixed(2)}</span>
          </div>
          <div>
            <h2> Balance: </h2>
            <span> €$ {Number(balance).toFixed(2)} </span>
          </div>
          <div>
            <h2> Total Balance: </h2>
            <span> €$ {total.toFixed(2)}</span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          makePurchase();
          setOpenSnackbar(true);
        }}
        disabled={total < 0 || shoppingCart.length === 0}
        color="primary"
        variant="contained"
      >
         Make Purchase 
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
             Your order has been done successfully.
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default ShoppingCart;