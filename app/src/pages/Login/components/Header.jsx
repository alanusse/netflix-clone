import { Link } from 'react-router-dom'
import styled from 'styled-components'

// components
import Container from '../../../components/Container'

// assets
import { ReactComponent as Logo } from '../../../assets/full-logo.svg'

const StyledLogo = styled(Logo)`
  width: 100%;
  max-width: 5rem;
  height: auto;
`
const StyledHeader = styled(Container)`
  padding-top: 20px;
  padding-bottom: 25px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <StyledLogo />
      </Link>
    </StyledHeader>
  )
}

export default Header
