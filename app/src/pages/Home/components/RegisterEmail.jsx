import styled from 'styled-components'

import Heading from '../../../components/Heading'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const StyledContainer = styled.div`
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
`

const RegisterEmail = () => {
  return (
    <StyledContainer>
      <Heading color='white' type='h2' fontSize='1.1rem' fontWeight='300' center>Ready to watch? Enter your email to create or restart your membership.</Heading>
      <form>
        <Input id='start-email' type='email' placeholder='Email address' />
        <Button
          type='submit'
          margin='1rem auto 0 auto'
          padding='.7rem 1rem'
          fontSize='.9rem'
        >
          Get Started
          <StyledIcon icon={faChevronRight} />
        </Button>
      </form>
    </StyledContainer>
  )
}

export default RegisterEmail
