import Heading from '../../../components/Heading'
import RegisterEmail from './RegisterEmail'

const Hero = () => {
  return (
    <section>
      <Heading type='h1' marginTop='0' center>Unlimited movies, TV shows, and more.</Heading>
      <Heading type='h2' fontSize='1.1rem' fontWeight='300' center>Watch anywhere. Cancel anytime.</Heading>
      <RegisterEmail />
    </section>
  )
}

export default Hero
