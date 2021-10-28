import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'

// components
import Header from '../LogIn/components/Header'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Heading from '../../components/Heading'

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

    :hover {
      text-decoration: underline;
    }
  }
`

const SignUpView = () => {
  return (
    <div>
      <Header />
      <StyledContainer>
        <Heading type='h1' color='#fff'>Sign Up</Heading>
        <form>
          <Input
            id='signup__email'
            type='email'
            margin='0 0 15px 0'
            placeholder='Email'
            variant='dark'
          />
          <Input
            id='signup__password'
            type='password'
            margin='0 0 15px 0'
            placeholder='Password'
            variant='dark'
          />
          <Input
            id='signup__repeat-password'
            type='password'
            margin='0 0 40px 0'
            placeholder='Repeat password'
            variant='dark'
          />
          <StyledButton type='submit'>Sign Up</StyledButton>
        </form>
        <StyledSignUpText>Do you already have an account? <Link to='/login'>Sign in.</Link></StyledSignUpText>
      </StyledContainer>
    </div>
  )
}

export default SignUpView
