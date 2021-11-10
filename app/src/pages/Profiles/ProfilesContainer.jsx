import { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import profileActions from '../../redux/actions/profile'

// components
import ProfilesView from './ProfilesView'
import ManageProfile from './components/ManageProfile'

const ProfilesContainer = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [manageProfile, setManageProfile] = useState(null) // it can be the id of one profile or 'create-profile' string
  const isManageMode = !!useRouteMatch('/manage-profiles')
  const { isLoading, profiles } = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(profileActions.setProfiles())
  }, [])

  const profileHandleClick = ({ id, isManageMode }) => {
    if (isManageMode) return setManageProfile(id)

    dispatch(profileActions.setActiveProfile(id))
    history.push('/browse')
  }

  const handleCreateProfile = () => setManageProfile('create-profile')

  const handleCancelProfileEdit = () => setManageProfile(null)

  if (manageProfile === 'create-profile') {
    const handleSaveNewProfile = (e, name) => {
      e.preventDefault()
      dispatch(profileActions.createProfile({ name }))
      setManageProfile(null)
    }

    return (
      <ManageProfile
        handleSave={handleSaveNewProfile}
        handleCancel={handleCancelProfileEdit}
      />
    )
  }

  if (manageProfile) {
    const profileName = profiles.find(profile => profile.id === manageProfile).name

    const handleSaveProfile = (e, name) => {
      e.preventDefault()
      dispatch(profileActions.modifyProfileName({ id: manageProfile, name }))
      setManageProfile(null)
    }

    return (
      <ManageProfile
        name={profileName}
        handleSave={handleSaveProfile}
        handleCancel={handleCancelProfileEdit}
      />
    )
  }

  return (
    <ProfilesView
      isLoading={isLoading}
      isManageMode={isManageMode}
      profiles={profiles}
      profileHandleClick={profileHandleClick}
      handleCreateProfile={handleCreateProfile}
    />
  )
}

export default ProfilesContainer
