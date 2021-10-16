/* eslint-disable no-undef */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../styles/colors'

export const ButtonRoot = props => `
  display: flex;
  align-items: center;
  padding: .4rem .8rem;
  background-color: ${props.bgColor || colors.primary};
  color: ${props.color || '#fff'};
  border: none;
  border-radius: .2rem;
  text-decoration: none;
  font-size: ${props.fontSize || '.8rem'};
  cursor: pointer;
`

const StyledButton = styled.button`
  ${ButtonRoot}
`

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  /* Children element to be rendered inside button */
  children: PropTypes.node
}

export default Button
