import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import useField from '../../hooks/useField'
import SignUpView from './SignUpView'
import userActions from '../../redux/actions/user'

const SignUpContainer = () => {
  const location = useLocation()
  const { successfulSignup, errorFields, errorMessage } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const emailInput = useField({
    type: 'email',
    placeholder: 'Email',
    // if user is coming from home page email input
    initialValue: location.state?.signUpEmail
  })
  const passwordInput = useField({ type: 'password', placeholder: 'Password' })
  const repeatPasswordInput = useField({ type: 'password', placeholder: 'Repeat password' })

  // Remove errors from state. This is needed because if user go to login page and are signup errors in state,
  // these errors will be displayed in login page.
  useEffect(() => {
    dispatch(userActions.removeErrors)
  }, [])

  useEffect(() => {
    // if signup is successfully, we'll dispatch the login action with user's signup credentials
    if (successfulSignup) {
      dispatch(userActions.login({
        email: emailInput.value,
        password: passwordInput.value
      }))
    }
  }, [successfulSignup])

  useEffect(() => {
    if (errorFields?.length > 0) {
      errorFields.forEach(error => {
        if (error.field === 'email') emailInput.setErrorMessage(error.message)
        if (error.field === 'password') passwordInput.setErrorMessage(error.message)
      })
    }
  }, [errorFields])

  const handleSignUp = e => {
    e.preventDefault()
    emailInput.removeError()
    passwordInput.removeError()
    repeatPasswordInput.removeError()

    if (emailInput.value.length === 0 || passwordInput.value.length === 0 || repeatPasswordInput.value.length === 0) {
      const emptyFieldMessage = 'This field can not be empty'

      if (emailInput.value.length === 0) emailInput.setErrorMessage(emptyFieldMessage)
      if (passwordInput.value.length === 0) passwordInput.setErrorMessage(emptyFieldMessage)
      if (repeatPasswordInput.value.length === 0) repeatPasswordInput.setErrorMessage(emptyFieldMessage)
      return
    }

    if (passwordInput.value !== repeatPasswordInput.value) {
      passwordInput.setErrorMessage('Passwords do not match')
      repeatPasswordInput.setErrorMessage('Passwords do not match')
      return
    }

    dispatch(userActions.signup({
      email: emailInput.value,
      password: passwordInput.value
    }))
  }

  return (
    <div>
      <SignUpView
        emailInput={emailInput}
        passwordInput={passwordInput}
        repeatPasswordInput={repeatPasswordInput}
        handleSignUp={handleSignUp}
        errorMessage={!errorFields && errorMessage}
      />
    </div>
  )
}

export default SignUpContainer
