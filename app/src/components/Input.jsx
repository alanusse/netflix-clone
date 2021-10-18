import styled from 'styled-components'
import colors from '../styles/colors'

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  ${props => props.isError && 'margin-bottom: 25px;'}
`

const StyledInput = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  ${props => props.isError && `border-bottom: 3px solid ${colors.orange};`};
  border-radius: 3px;
  background-color: #fdfdfd;
  padding: 20px 15px 10px 15px;
  font-size: 17px;

  ::placeholder {
    visibility: hidden;
  }

  :focus {
    outline: none;
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
  transform: translateY(130%);
  font-size: 14px;
  margin-top: 8px;
  margin-left: 5px;
  color: ${colors.orange};
  letter-spacing: .5px;
`

const Input = ({ id, errorMessage, ...props }) => {
  return (
    <InputContainer isError={Boolean(errorMessage)}>
      <StyledInput id={id} isError={Boolean(errorMessage)} {...props} />
      <StyledLabel htmlFor={id}>{props.placeholder}</StyledLabel>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
}

export default Input
