import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #fdfdfd;
  padding: 20px 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a0a0a0;
    font-size: 14px;
  }
`

const Input = ({ ...props }) => {
  return (
    <StyledInput {...props} />
  )
}

export default Input
