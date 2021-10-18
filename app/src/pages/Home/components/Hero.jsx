import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Heading from '../../../components/Heading'

const Hero = () => {
  return (
    <section>
      <Heading type='h1' marginTop='0' center>Unlimited movies, TV shows, and more.</Heading>
      <Heading type='h2' fontSize='1.1rem' fontWeight='300' center>Watch anywhere. Cancel anytime.</Heading>
      <div>
        <Heading type='h2' fontSize='1.1rem' fontWeight='300' center>Ready to watch? Enter your email to create or restart your membership.</Heading>
        <form>
          <Input id='start-email' type="email" placeholder='Email address' />
          <Button
            type='submit'
            margin='1rem auto 0 auto'
            padding='.7rem 1rem'
            fontSize='.9rem'
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Hero
