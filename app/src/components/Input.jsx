import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../styles/colors'

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.isError && 'margin-bottom: 40px;'}
  ${props => props.isError && `border-bottom: 3px solid ${colors.orange};`}
`

const StyledInput = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 5px;

  // border color
  border-color: ${({ variant }) => (
    variant === 'dark'
      ? 'transparent'
      : '#ccc'
  )};

  // background color
  background-color: ${({ variant }) => (
    variant === 'dark'
      ? '#333'
      : '#fdfdfd'
  )};

  // color
  color: ${({ variant }) => (
    variant === 'dark'
      ? '#ccc'
      : '#333'
  )};

  padding: 20px 15px 10px 15px;
  font-size: 17px;

  ::placeholder {
    visibility: hidden;
  }

  :focus {
    outline: none;
    background-color: ${({ variant }) => (
      variant === 'dark'
        ? '#454545'
        : '#eaeaea'
    )};
  }

  :not(:focus):placeholder-shown + label {
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  top: 6px;
  left: 0;
  padding-left: 15px;
  color: #999999;
  font-size: 12px;
  letter-spacing: .5px;
  transition: all .3s ease;
  cursor: text;
`

const ErrorMessage = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(160%);
  font-size: 14px;
  margin-top: 8px;
  margin-left: 5px;
  color: ${colors.orange};
  letter-spacing: .5px;
`

const Input = ({
  id,
  errorMessage,
  placeholder,
  margin,
  variant = 'light',
  ...props
}) => {
  return (
    <InputContainer margin={margin} isError={Boolean(errorMessage)}>
      <StyledInput
        id={id}
        isError={Boolean(errorMessage)}
        placeholder={placeholder}
        variant={variant}
        {...props}
      />
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
}

Input.propTypes = {
  /* Id to set into input element */
  id: PropTypes.string.isRequired,

  /* Error message to display */
  errorMessage: PropTypes.string,

  /* Placeholder text */
  placeholder: PropTypes.string.isRequired,

  /* Margin to apply to input container */
  margin: PropTypes.string,

  /* Style variant of input */
  variant: PropTypes.string
}

export default Input
