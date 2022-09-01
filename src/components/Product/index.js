/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useShoppingCartContext } from 'common/context/ShoppingCart'

function Product({ name, photo, id, price, unity }) {
  const { shoppingCart, addProduct, removeProduct} = useShoppingCartContext();
  const productInCart = shoppingCart.find(itemCart => itemCart.id === id);

  return (
      <Container>
        <div>
          <img src={`/assets/${photo}.png`}alt={`photo of ${name}`}/>
          <p>
            {name} - €$ {price?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton color="secondary" onClick={() => removeProduct(id)} disabled={!productInCart}>
            <RemoveIcon />
          </IconButton>
          {productInCart?.quantity || 0}
          <IconButton color="primary" onClick={() => addProduct({ name, photo, id, price, unity })}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Product)