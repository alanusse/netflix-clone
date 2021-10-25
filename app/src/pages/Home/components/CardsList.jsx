/* eslint-disable react/jsx-pascal-case */
import styled from 'styled-components'

// components
import Card from './Card'
import Heading from '../../../components/Heading'
import RegisterEmail from './RegisterEmail'

// assets
import tvImage from '../../../assets/tv.png'
import videoTv from '../../../assets/video-tv.m4v'
import iphoneImage from '../../../assets/iphone.jpeg'
import strangerThingsImage from '../../../assets/stranger-things.png'
import downloadGif from '../../../assets/download-icon.gif'
import devicePile from '../../../assets/device-pile.png'
import videoDevices from '../../../assets/video-devices.m4v'
import kidsImage from '../../../assets/kids-image.png'

// style colors
import colors from '../../../styles/colors'
import FAQ from './FAQ'

const StyledHeading = styled(Heading)`
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 1.3rem;
`

const StyledText = styled.p`
  color: #fff;
  text-align: center;
  font-weight: 300;
  font-size: .8rem;
`

const StyledImage = styled.img`
  position: relative;
  width: 100%;
  ${props => props.height && `
    height: ${props.height};
    width: auto;`}
  z-index: 2;
`

const StyledContainer = styled.div`
  position: relative;
  ${props => props.display && `display: ${props.display}`};
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props => props.margin && `margin: ${props.margin}`};
`

const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  ${props => `width: ${props.width || '75%'};`}
  ${props => `transform: translate(-50%, ${props.translateY || '-55%'});`}
  z-index: 1;
`

const StyledDownloadCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 5rem;
  border: 2px solid ${colors.grey};
  border-radius: 15px;
  margin: 0 auto;
  padding: 0px 15px;
`

const StyledSpan = styled.span`
  ${props => props.display && `display: ${props.display}`};
  ${props => props.color && `color: ${props.color}`};
  ${props => props.fontSize && `font-size: ${props.fontSize}`};
  ${props => props.margin && `margin: ${props.margin}`};
`

const StyledFlexContent = styled.div`
  @media (min-width: 950px) {
    display: flex;
    ${({ $rowReverse }) => $rowReverse && 'flex-direction: row-reverse;'}
    justify-content: space-between;
    align-items: center;
  }
`

const CardsList = () => {
  return (
    <div>
      <Card>
        <StyledFlexContent>
          <div>
            <StyledHeading type='h3'>Enjoy on your TV.</StyledHeading>
            <StyledText>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</StyledText>
          </div>
          <StyledContainer>
            <StyledImage src={tvImage} alt='TV with remote control' />
            <StyledVideo src={videoTv} autoPlay playsInline muted loop />
          </StyledContainer>
        </StyledFlexContent>
      </Card>

      <Card>
        <StyledFlexContent $rowReverse>
          <div>
            <StyledHeading type='h3'>Download your shows to watch offline.</StyledHeading>
            <StyledText>Save your favorites easily and always have something to watch.</StyledText>
          </div>
          <StyledContainer>
            <StyledImage src={iphoneImage} alt='iPhone with Stranger Things on the screen' />
            <StyledDownloadCard>
              <StyledImage height='3rem' src={strangerThingsImage} alt='Stranger Things' />
              <StyledContainer display='flex' flexDirection='column' margin='0 auto 0 20px'>
                <StyledSpan
                  color='#fff'
                  display='block'
                  margin='0 0 5px 0'
                  fontSize='1rem'
                >
                  Stranger Things
                </StyledSpan>
                <StyledSpan color={colors.blue} display='block' fontSize='.8rem'>Downloading...</StyledSpan>
              </StyledContainer>
              <StyledImage height='2.5rem' src={downloadGif} alt='Download gif' />
            </StyledDownloadCard>
          </StyledContainer>
        </StyledFlexContent>
      </Card>

      <Card>
        <StyledFlexContent>
          <div>
            <StyledHeading type='h3'>Watch everywhere.</StyledHeading>
            <StyledText>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</StyledText>
          </div>
          <StyledContainer>
            <StyledImage src={devicePile} alt='Device pile' />
            <StyledVideo
              src={videoDevices}
              autoPlay
              playsInline
              muted
              loop
              width='62%'
              translateY='-86%'
            />
          </StyledContainer>
        </StyledFlexContent>
      </Card>

      <Card>
        <StyledFlexContent $rowReverse>
          <div>
            <StyledHeading type='h3'>Create profiles for kids.</StyledHeading>
            <StyledText>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</StyledText>
          </div>
          <div>
            <StyledImage src={kidsImage} alt='Animated kids' />
          </div>
        </StyledFlexContent>
      </Card>

      <FAQ />

      <Card>
        <RegisterEmail />
      </Card>
    </div>
  )
}

export default CardsList
