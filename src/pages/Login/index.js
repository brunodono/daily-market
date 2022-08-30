import { Button } from '@material-ui/core';
import { Container, Title, InputContainer } from './styles';
import { Input, InputLabel, InputAdornment } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'common/context/User';

function Login() {
  const history = useHistory();
  return (
    <Container>
      <UserContext.Consumer>
        {({ name, setName, balance, setBalance }) => (
          <>
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
              <Input value={balance} onChange={(event) => setBalance(event.target.value)} type="number" startAdornment={
                <InputAdornment position="start">
                  €$
                </InputAdornment>
              }
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push('/market')}
            >
              Next
            </Button>

          </>
        )}
      </UserContext.Consumer>
    </Container>
  )
};

export default Login;