import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link'
import { ReactComponent as Logo } from '../../assets/full-logo.svg'
import { Link as RRLink } from 'react-router-dom'
import Container from '../Container'

const Header = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`

const StyledLogo = styled(Logo)`
  width: 100px;
  height: auto;
`

const HeaderView = ({ isUserLogged }) => {
  return (
    <Container>
      <Header>
        <span>
          <RRLink to='/'>
            <StyledLogo />
          </RRLink>
        </span>
        {!isUserLogged && <Link to='/login'>Sign In</Link>}
      </Header>
    </Container>
  )
}

HeaderView.propTypes = {
  isUserLogged: PropTypes.bool.isRequired
}

export default HeaderView
