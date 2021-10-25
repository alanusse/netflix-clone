import styled from 'styled-components'
import Card from './Card'
import ToggleableQuestion from './ToggleableQuestion'
import useToggleableList from '../../../hooks/useToggleableList'

// questions and answers
import FAQItems from '../utils/FAQ'

const StyledAnswerText = styled.p`
  color: #fff;
`

const FAQ = () => {
  const toggleableList = useToggleableList()

  return (
    <Card>
      <h2>Frequently Asked Questions</h2>
      {FAQItems.map((item, idx) => (
        <ToggleableQuestion
          {...toggleableList}
          id={idx}
          key={idx}
          question={item.question}
        >
          <StyledAnswerText>{item.answer}</StyledAnswerText>
        </ToggleableQuestion>
      ))}
    </Card>
  )
}

export default FAQ
