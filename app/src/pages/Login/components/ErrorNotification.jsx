import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../../styles/colors'

const StyledNotification = styled.div`
  background-color: ${colors.orange};
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`

const StyledText = styled.p`
  color: #fff;
  font-size: 0.6rem;
  font-weight: 400;
  margin: 0;
`

const ErrorNotification = ({ message }) => {
  return (
    <StyledNotification>
      <StyledText>{message}</StyledText>
    </StyledNotification>
  )
}

ErrorNotification.propTypes = {
  /* Message explaining the error */
  message: PropTypes.string.isRequired
}

export default ErrorNotification
