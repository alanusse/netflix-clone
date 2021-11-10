import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import colors from '../../../styles/colors'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${colors.grey};

  ${Content}:hover & {
    color: #fff;
  }
`

const StyledText = styled.span`
  margin-top: 10px;
  color: ${colors.grey};
  font-size: .7rem;

  ${Content}:hover & {
    color: #fff;
  }
`

const NewProfile = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ background: 'transparent', border: 'none' }}>
      <Content>
        <StyledIcon icon={faPlusCircle} />
        <StyledText>Create new account</StyledText>
      </Content>
    </button>
  )
}

NewProfile.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NewProfile
