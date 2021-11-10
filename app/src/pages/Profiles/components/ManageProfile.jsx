import PropTypes from 'prop-types'
import styled from 'styled-components'
import useField from '../../../hooks/useField'
import colors from '../../../styles/colors'
import entranceAnimation from '../utils/entranceAnimation'

import Container from '../../../components/Container'
import Header from '../../../components/Header'
import Button from '../components/Button'

const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: 1s ease ${entranceAnimation}
`

const Title = styled.h2`
  color: #fff;
  font-weight: 400;
  margin-bottom: 0;
`

const AvatarConfig = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin: 10px 0;
  border-top: 1px solid ${colors.grey};
  border-bottom: 1px solid ${colors.grey};
`

const AvatarContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 5px;
  overflow: hidden;
`

const Input = styled.input`
  align-self: flex-start;
  margin-left: 1rem;
  padding: 8px;
  font-size: .7rem;
  color: #fff;
  background-color: ${colors.grey};
  border: none;

  &::placeholder {
    color: #ccc;
  }
`

const ManageProfile = ({ name, handleSave, handleCancel }) => {
  const input = useField({ type: 'text', initialValue: name || '', placeholder: 'Name' })

  return (
    <>
      <Header />
      <Container>
        <ContentContainer>
          <form>
            <Title>Manage profile</Title>
            <AvatarConfig>
              <AvatarContainer>
                <img
                  src='https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png'
                  alt='User avatar'
                  style={{ width: '100%' }}
                />
              </AvatarContainer>
              <Input {...input} />
            </AvatarConfig>
            <div>
              <Button type='submit' onClick={(e) => handleSave(e, input.value)} variant='solid'>Save</Button>
              <Button onClick={handleCancel} style={{ marginLeft: '10px' }}>Cancel</Button>
            </div>
          </form>
        </ContentContainer>
      </Container>
    </>
  )
}

ManageProfile.propTypes = {
  /* Initial value of input */
  name: PropTypes.string,

  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}

export default ManageProfile
