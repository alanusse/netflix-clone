import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../../styles/colors'

const StyledButton = styled.button`
  ${props => props.center && 'display: block;'}
  ${props => props.center && 'margin: 0 auto;'}
  padding: 5px 20px;
  font-size: .7rem;
  font-weight: 400;
  color: ${props => props.variant === 'solid' ? '#000' : `${colors.grey}`};
  background-color: ${props => props.variant === 'solid' ? '#fff' : 'transparent'};
  border: 2px solid ${props => props.variant === 'solid' ? '#fff' : `${colors.grey}`};
  cursor: pointer;

  &:hover {
    color: #fff;
    border-color: ${props => props.variant === 'solid' ? `${colors.primary}` : '#fff'};
    background-color: ${props => props.variant === 'solid' ? `${colors.primary}` : 'transparent'};
  }
`

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string
}

export default Button
