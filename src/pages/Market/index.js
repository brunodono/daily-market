import {
  Container,
  Header,
  List,
} from './styles';
import market from './market.json';
import Product from 'components/Product';
import NavBar from './NavBar';


function Market() {
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Hello!</h2>
          <h3> Balance: €$</h3>
        </div>
        <p>Find the best organic products!</p>
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