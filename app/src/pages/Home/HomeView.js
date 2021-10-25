import styled from 'styled-components'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Hero from './components/Hero'
import heroImage from '../../assets/home-hero.jpeg'
import CardsList from './components/CardsList'

const HomeHero = styled.div`
  position: relative;
  display: flex;
  min-height: 80vh;
  background-image: url(${heroImage});
  background-position: center;
  background-size: cover;

  > * {
    position: relative;
    z-index: 2;
    color: #fff;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(transparent, black);
    z-index: 1;
  }
`

const StyledContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: inherit;
`

const HomeView = () => {
  return (
    <div>
      <HomeHero>
        <StyledContainer>
          <StyledHeader>
            <Header />
          </StyledHeader>
          <Hero />
        </StyledContainer>
      </HomeHero>
      <CardsList />
    </div>
  )
}

export default HomeView
