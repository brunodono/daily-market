import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { Container, Back, TotalContainer, PaymentContainer} from './styles';

function ShoppingCart() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  return (
    <Container>
      <Back />
      <h2>
        Shopping Cart
      </h2>
      <PaymentContainer>
        <InputLabel> Payment Method </InputLabel>
      </PaymentContainer>
      <TotalContainer>
          <div>
            <h2>Total in the Shopping Cart: </h2>
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