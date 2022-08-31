import { Button } from '@material-ui/core';
import { Container, Title, InputContainer } from './styles';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'common/context/User';
import { useContext } from 'react';

function Login() {
  const history = useHistory();
  const { name, setName, balance, setBalance } = useContext(UserContext);
  return (
    <Container>

      <Title>
        Enter your name
      </Title>
      <InputContainer>
        <InputLabel>
          Name
        </InputLabel>
        <Input value={name} onChange={(event) => setName(event.target.value)} type="text" />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Balance
        </InputLabel>
        <Input 
        value={balance} 
        onChange={(event) => setBalance(event.target.value)} 
        type="number" 
        startAdornment={
          <InputAdornment position="start">
            €$
          </InputAdornment>
        }
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={name.length < 3}
        onClick={() => history.push('/market')}
      >
        Next
      </Button>
    </Container>
  )
};

export default Login;