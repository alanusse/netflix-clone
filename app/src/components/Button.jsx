/* eslint-disable no-undef */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../styles/colors'

export const ButtonRoot = props => `
  display: flex;
  align-items: center;
  padding: ${props.padding || '.4rem .6rem'};
  ${props.margin && `margin: ${props.margin}`};
  background-color: ${props.bgColor || colors.primary};
  color: ${props.color || '#fff'};
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: ${props.fontSize || '.8rem'};
  font-weight: ${props.fontWeight || 300};
  letter-spacing: .3px;
  cursor: pointer;
  transition: all .3s ease;

  :focus {
    outline: none;
  }

  :hover {
    filter: drop-shadow(2px 4px 6px black);
  }
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
