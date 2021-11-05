import { useSelector } from 'react-redux'
import HeaderView from './HeaderView'

const HeaderContainer = () => {
  const isUserLogged = useSelector(state => state.user.isLoggedIn)

  return (
    <HeaderView isUserLogged={isUserLogged} />
  )
}

export default HeaderContainer
