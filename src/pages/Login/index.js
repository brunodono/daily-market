import { Button } from '@material-ui/core';
import {
  Container,
  Title,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';

function Login() {
  return (
    <Container>
      <Title>
        Enter your name
      </Title>
      <InputContainer>
        <InputLabel>
          Name
        </InputLabel>
        <Input
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Balance
        </InputLabel>
        <Input
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
      >
        Next
      </Button>
    </Container>
  )
};

export default Login;