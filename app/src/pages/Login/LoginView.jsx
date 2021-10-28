import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'

// components
import Container from '../../components/Container'
import Header from './components/Header'
import Heading from '../../components/Heading'
import Input from '../../components/Input'
import Button from '../../components/Button'

const StyledContainer = styled(Container)`
  max-width: 550px;
`

const StyledButton = styled(Button)`
  width: 100%;
  justify-content: center;
  font-size: .8rem;
  font-weight: 500;
  padding: 15px 0;
`

const StyledSignUpText = styled.p`
  font-size: .8rem;
  color: ${colors.grey};

  a {
    color: #ccc;
    text-decoration: none;
  }
`

const LoginView = () => {
  return (
    <div>
      <Header />
      <StyledContainer>
        <Heading type='h1' color='#fff'>Sign In</Heading>
        <form>
          <Input
            id='login__email'
            type='email'
            margin='0 0 15px 0'
            placeholder='Email'
            variant='dark'
          />
          <Input
            id='login__password'
            type='password'
            margin='0 0 40px 0'
            placeholder='Password'
            variant='dark'
          />
          <StyledButton type='submit'>Sign In</StyledButton>
        </form>
        <StyledSignUpText>New to Netflix? <Link to='/'>Sign up now.</Link></StyledSignUpText>
      </StyledContainer>
    </div>
  )
}

export default LoginView
