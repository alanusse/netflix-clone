import { useSelector, useDispatch } from 'react-redux'
import LoginView from './LoginView'
import useField from '../../hooks/useField'
import userActions from '../../redux/actions/user'

const LoginContainer = () => {
  const state = useSelector(state => state.user)
  const dispatch = useDispatch()

  const emailInput = useField({ type: 'email', placeholder: 'Email' })
  const passwordInput = useField({ type: 'password', placeholder: 'Password' })

  const handleLogin = (e) => {
    e.preventDefault()
    emailInput.removeError()
    passwordInput.removeError()

    if (emailInput.value.length === 0 || passwordInput.value.length === 0) {
      if (emailInput.value.length === 0) emailInput.setErrorMessage('Email field can not be empty')
      if (passwordInput.value.length === 0) passwordInput.setErrorMessage('Password field can not be empty')
      return
    }

    dispatch(userActions.login({
      email: emailInput.value,
      password: passwordInput.value
    }))
  }

  return (
    <LoginView
      emailInput={emailInput}
      passwordInput={passwordInput}
      handleLogin={handleLogin}
      isLoading={state.isLoading}
      isError={state.isError}
      errorMessage={state.errorMessage}
    />
  )
}

export default LoginContainer
