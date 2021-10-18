import styled from 'styled-components'
import colors from '../styles/colors'

const InputContainer = styled.div`
  position: relative;
  display: inline;
  width: 100%;
  ${props => props.isError && 'margin-bottom: 25px;'}
`

const StyledInput = styled.input`
  position: relative;
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  ${props => props.isError && `border-bottom: 3px solid ${colors.orange};`};
  border-radius: 3px;
  background-color: #fdfdfd;
  padding: 20px 15px 10px 15px;

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
  top: 0;
  left: 0;
  padding-left: 15px;
  color: #999999;
  font-size: 12px;
  letter-spacing: .5px;
  transform: translateY(40%);
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

const Input = ({ errorMessage, ...props }) => {
  return (
    <InputContainer isError={Boolean(errorMessage)}>
      <StyledInput isError={Boolean(errorMessage)} {...props} />
      <StyledLabel>{props.placeholder}</StyledLabel>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
}

export default Input
