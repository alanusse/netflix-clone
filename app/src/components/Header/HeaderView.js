import styled from 'styled-components'
import Link from '../Link'
import { ReactComponent as Logo } from '../../full-logo.svg'
import { Link as RRLink } from 'react-router-dom'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`

const StyledLogo = styled(Logo)`
  width: 100px;
  height: auto;
`

const HeaderView = () => {
  return (
    <Header>
      <span>
        <RRLink to='/'>
          <StyledLogo />
        </RRLink>
      </span>
      <Link to='/login'>Sign In</Link>
    </Header>
  )
}

export default HeaderView
