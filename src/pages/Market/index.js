import {
  Container,
  Header,
  List,
} from './styles';
import market from './market.json';
import Product from 'components/Product';
import NavBar from './NavBar';
import { useContext } from 'react';
import { UserContext } from 'common/context/User';


function Market() {
  const { name, balance} = useContext(UserContext);
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Hello {name}! </h2>
          <h3> Balance: €$ {balance}</h3>
        </div>
        <p>In Daily Market you will find the best organic products!</p>
      </Header>
      <List>
        <h2>
          Products:
        </h2>
        {market.map(product => (
          <Product
            {...product}
            key={product.id}
          />
        ))}
      </List>
    </Container>
  )
}

export default Market;