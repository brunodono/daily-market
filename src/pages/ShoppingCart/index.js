import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { PaymentContext, usePaymentContext } from 'common/context/Payment';
import { useShoppingCartContext } from 'common/context/ShoppingCart';
import Product from 'components/Product';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Back, TotalContainer, PaymentContainer} from './styles';

function ShoppingCart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { shoppingCart } = useShoppingCartContext();
  const { paymentMethods, paymentMethod, changePaymentMethod } = usePaymentContext();
  const history = useHistory();
  return (
    <Container>
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
            <span>€$ </span>
          </div>
          <div>
            <h2> Balance: </h2>
            <span> €$ </span>
          </div>
          <div>
            <h2> Total Balance: </h2>
            <span> €$ </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
         Buy
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