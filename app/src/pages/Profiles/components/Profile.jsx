import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../../styles/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 6rem;
  margin: 0 8px 15px 8px;
  cursor: pointer;
`

const AvatarContainer = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  border: 3px solid transparent;
  border-radius: 10px;
  overflow: hidden;

  ${ProfileContent}:hover & {
    border-color: #ccc;
  }

  &::after {
    visibility: ${props => props.isManageMode ? 'visible' : 'hidden'};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }
`

const ProfileAvatar = styled.img`
  width: 100%;
  height: 100%;
`

const ProfileName = styled.span`
  color: ${colors.grey};
  margin-top: 5px;
  font-size: .8rem;
  font-weight: 400;

  ${ProfileContent}:hover & {
    color: #ccc;
  }
`

const ManageProfileIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 100%;
  color: #ccc;
  box-sizing: content-box;
  font-size: 20px;
`

const Profile = ({ id, name, isManageMode, handleClick }) => {
  return (
    <button onClick={() => handleClick({ id, isManageMode })} style={{ border: 'none', background: 'transparent' }}>
      <ProfileContent>
        <AvatarContainer isManageMode={isManageMode}>
          <ProfileAvatar
            src='https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png'
            alt='User avatar'
          />
          {isManageMode && <ManageProfileIcon icon={faPen} />}
        </AvatarContainer>
        <ProfileName>{name}</ProfileName>
      </ProfileContent>
    </button>
  )
}

Profile.propTypes = {
  /* Database id of profile */
  id: PropTypes.string.isRequired,

  /* Profile name */
  name: PropTypes.string.isRequired,

  /* Boolean that indicates if user is managing their profiles */
  isManageMode: PropTypes.bool.isRequired,

  /* Function for handle click of profile */
  handleClick: PropTypes.func.isRequired
}

export default Profile
