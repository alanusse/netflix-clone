import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// components
import Container from '../../components/Container'
import Header from './components/Header'
import Heading from '../../components/Heading'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ErrorNotification from './components/ErrorNotification'

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

const LoginView = ({
  emailInput,
  passwordInput,
  handleLogin,
  isLoading,
  isError,
  errorMessage
}) => {
  return (
    <div>
      <Header />
      <StyledContainer>
        <Heading type='h1' color='#fff'>Sign In</Heading>
        {isError && <ErrorNotification message={errorMessage} />}
        <form>
          <Input
            id='login__email'
            margin='0 0 15px 0'
            variant='dark'
            {...emailInput}
          />
          <Input
            id='login__password'
            margin='0 0 40px 0'
            variant='dark'
            {...passwordInput}
          />
          <StyledButton disabled={isLoading} onClick={handleLogin}>
            {!isLoading
              ? 'Sign In'
              : <FontAwesomeIcon icon={faSpinner} className='fa-spin' />}
          </StyledButton>
        </form>
        <StyledSignUpText>New to Netflix? <Link to='/'>Sign up now.</Link></StyledSignUpText>
      </StyledContainer>
    </div>
  )
}

LoginView.propTypes = {
  /* useField hook for email input */
  emailInput: PropTypes.object.isRequired,

  /* useField hook for password input */
  passwordInput: PropTypes.object.isRequired,

  /* Function that is executed when user click on Sign In button */
  handleLogin: PropTypes.func.isRequired,

  /* Boolean that indicates if a request login was throw */
  isLoading: PropTypes.bool.isRequired,

  /* Boolean that indicates if an error occurred during the login request */
  isError: PropTypes.bool.isRequired,

  /* Text explaining the error occurred */
  errorMessage: PropTypes.string
}

export default LoginView
