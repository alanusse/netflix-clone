import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import entranceAnimation from './utils/entranceAnimation'

// components
import Container from '../../components/Container'
import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Profile from './components/Profile'
import Button from './components/Button'
import NewProfile from './components/NewProfile'

const MainContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const MainContentAnimation = styled(Container)`
  animation: ${entranceAnimation} 1s ease;
`

const ListOfProfiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`

const ProfilesView = ({ isLoading, isManageMode, profiles, profileHandleClick, handleCreateProfile }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      {!isLoading && profiles && (
        <MainContent>
          <MainContentAnimation>
            <Heading type='h1' center color='white' fontWeight='300'>
              {isManageMode
                ? 'Manage profiles'
                : "Who's watching?"}
            </Heading>
            <ListOfProfiles>
              {profiles.map(profile => (
                <Profile
                  key={profile.id}
                  id={profile.id}
                  name={profile.name}
                  isManageMode={isManageMode}
                  handleClick={profileHandleClick}
                />))}
              {profiles.length < 5 && <NewProfile onClick={handleCreateProfile} />}
            </ListOfProfiles>
            <Link to={isManageMode ? '/profiles' : '/manage-profiles'} style={{ textDecoration: 'none' }}>
              <Button center variant={isManageMode && 'solid'}>
                {isManageMode
                  ? 'Save changes'
                  : 'Manage profiles'}
              </Button>
            </Link>
          </MainContentAnimation>
        </MainContent>
      )}
    </div>
  )
}

ProfilesView.propTypes = {
  /* Boolean that indicates if profiles request was send */
  isLoading: PropTypes.bool.isRequired,

  /* Boolean that indicates if user is at the '/manage-profiles' route */
  isManageMode: PropTypes.bool.isRequired,

  /* List of user's profiles */
  profiles: PropTypes.array,

  profileHandleClick: PropTypes.func.isRequired,

  handleCreateProfile: PropTypes.func.isRequired
}

export default ProfilesView
