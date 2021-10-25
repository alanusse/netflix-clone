import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../../../components/Container'
import colors from '../../../styles/colors'

const StyledDiv = styled.div`
  background-color: ${colors.secondary};
  padding: 2rem 0;
  border-top: 8px solid ${colors.darkGrey};
`

const Card = ({ children }) => {
  return (
    <StyledDiv>
      <Container>
        {children}
      </Container>
    </StyledDiv>
  )
}

Card.propTypes = {
  /* Content of component */
  children: PropTypes.node
}

export default Card
