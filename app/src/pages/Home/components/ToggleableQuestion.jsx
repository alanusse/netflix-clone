import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../../styles/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const StyledContainer = styled.div`
  margin-bottom: .4rem;

  :last-of-type {
    margin-bottom: 0;
  }
`

const StyledQuestionText = styled.p`
  color: #fff;
`

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
`

const StyledQuestionContainer = styled.div`
  background-color: ${colors.darkGrey};
  padding: 0 1rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.2rem;
  ${({ $isOpen }) => $isOpen && 'transform: rotate(45deg);'}
  transition: all .2s ease;
`

const StyledAnswer = styled.div`
  ${props => props.$isOpen ? 'max-height: 1200px;' : 'max-height: 0;'}
  margin-top: 2px;
  background-color: ${colors.darkGrey};
  line-height: 1.4;
  transition: max-height .3s ease-in-out;
  overflow: hidden;

  p {
    margin: 0;
    padding: 1rem;
  }
`

const ToggleableQuestion = ({ id, showed, setActive, question, children }) => {
  return (
    <StyledContainer>
      <StyledQuestionContainer>
        <StyledButton onClick={() => setActive(id)}>
          <StyledQuestionText>{question}</StyledQuestionText>
          <StyledIcon icon={faPlus} $isOpen={showed === id} />
        </StyledButton>
      </StyledQuestionContainer>

      <StyledAnswer $isOpen={showed === id}>
        {children}
      </StyledAnswer>

    </StyledContainer>
  )
}

ToggleableQuestion.propTypes = {
  /* ID of this toggleable component */
  id: PropTypes.number.isRequired,

  /* ID of opened toggleable. It can be either null or number */
  showed: PropTypes.number,

  /* Function that change the ID of opened toggleable */
  setActive: PropTypes.func.isRequired,

  /* Question to be showed as text */
  question: PropTypes.string.isRequired,

  /* Element to be showed as toggleable element */
  children: PropTypes.node.isRequired
}

export default ToggleableQuestion
