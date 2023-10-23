import {Component} from 'react'

import ReactContext from '../../context'

import {
  HomeMainContainer,
  ImgContainer,
  Logo,
  HomeHeading,
  WelcomeContainer,
  RegisterHeading,
  Para,
  RegisterButton,
  MeetupContainer,
  MeetupImg,
  LinkEl,
} from './styeldComponents'

class Home extends Component {
  renderRegisterView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value

        return isRegistered ? (
          <WelcomeContainer>
            <HomeHeading> Hello {name} </HomeHeading>
            <Para>Welcome to {topic} </Para>
          </WelcomeContainer>
        ) : (
          <WelcomeContainer>
            <RegisterHeading> Welcome to Meetup </RegisterHeading>
            <Para> Please register for the topic </Para>
            <LinkEl to="/register">
              <RegisterButton type="button">Register</RegisterButton>
            </LinkEl>
          </WelcomeContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    const meetUp =
      'https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png'
    const wedLogo =
      'https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png'
    return (
      <HomeMainContainer>
        <ImgContainer>
          <Logo src={wedLogo} alt="website logo" />
        </ImgContainer>
        {this.renderRegisterView()}

        <MeetupContainer>
          <MeetupImg src={meetUp} alt="meetup" />
        </MeetupContainer>
      </HomeMainContainer>
    )
  }
}

export default Home
