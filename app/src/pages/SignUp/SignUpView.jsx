import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'

// components
import Header from '../LogIn/components/Header'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Heading from '../../components/Heading'
import ErrorNotification from '../LogIn/components/ErrorNotification'

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

const SignUpView = ({ emailInput, passwordInput, repeatPasswordInput, handleSignUp, errorMessage }) => {
  return (
    <div>
      <Header />
      <StyledContainer>
        <Heading type='h1' color='#fff'>Sign Up</Heading>
        {errorMessage && <ErrorNotification message={errorMessage} />}
        <form>
          <Input
            {...emailInput}
            id='signup__email'
            margin='0 0 15px 0'
            variant='dark'
          />
          <Input
            {...passwordInput}
            id='signup__password'
            margin='0 0 15px 0'
            variant='dark'
          />
          <Input
            {...repeatPasswordInput}
            id='signup__repeat-password'
            margin='0 0 40px 0'
            variant='dark'
          />
          <StyledButton type='submit' onClick={handleSignUp}>Sign Up</StyledButton>
        </form>
        <StyledSignUpText>Do you already have an account? <Link to='/login'>Sign in.</Link></StyledSignUpText>
      </StyledContainer>
    </div>
  )
}

SignUpView.propTypes = {
  /* Object returned from useField hook */
  emailInput: PropTypes.object.isRequired,
  passwordInput: PropTypes.object.isRequired,
  repeatPasswordInput: PropTypes.object.isRequired,

  handleSignUp: PropTypes.func.isRequired,

  /* Error message from api */
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

export default SignUpView
