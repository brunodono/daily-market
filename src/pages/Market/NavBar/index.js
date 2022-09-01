import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useShoppingCartContext } from 'common/context/ShoppingCart';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const { amountProducts } = useShoppingCartContext();
  const history = useHistory();
  return (
    <Nav>
      <Logo />
      <IconButton disabled={amountProducts === 0} onClick={() => history.push("/shoppingcart")}>
        <Badge
          color="primary"
          badgeContent={amountProducts}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}