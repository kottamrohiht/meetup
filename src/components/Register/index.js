import {Component} from 'react'

import ReactContext from '../../context'

import {
  RegisterMainContainer,
  ImgContainer,
  Logo,
  RegisterHeading,
  Innercontainer,
  SideImgcontainer,
  SideImg,
  FromContainer,
  Label,
  Input,
  Select,
  Option,
  RegisterNow,
  ErrMag,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    userVal: '',
    topic: topicsList[0].id,
    showErrMsg: false,
  }

  onChangeUserInput = event => {
    this.setState({
      userVal: event.target.value,
    })
  }

  onChangeSelect = event => {
    this.setState({
      topic: event.target.value,
    })
  }

  renderForm = () => (
    <ReactContext.Consumer>
      {value => {
        const {updateRegistration} = value
        const {userVal, topic, showErrMsg} = this.state

        const onClickRegisterNow = event => {
          event.preventDefault()
          const topicName = topicsList.filter(each => each.id === topic)
          const userTopic = topicName[0].displayText

          const userObj = {userVal, userTopic}

          if (userVal === '') {
            this.setState({
              showErrMsg: true,
            })
          } else {
            updateRegistration(userObj)

            const {history} = this.props
            history.replace('/')
          }
        }

        return (
          <FromContainer onSubmit={onClickRegisterNow}>
            <RegisterHeading> Let Us join </RegisterHeading>
            <Label htmlFor="name"> NAME </Label>
            <Input
              id="name"
              value={userVal}
              onChange={this.onChangeUserInput}
              placeholder="Your name"
            />

            <Label htmlFor="topics"> TOPICS </Label>
            <Select onChange={this.onChangeSelect} id="topics" value={topic}>
              {topicsList.map(each => (
                <Option key={each.id} value={each.id}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
            <RegisterNow type="submit">Register Now</RegisterNow>
            {showErrMsg && <ErrMag> Please enter your name </ErrMag>}
          </FromContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    const webRegister =
      'https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png'
    const wedLogo =
      'https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png'
    return (
      <RegisterMainContainer>
        <ImgContainer>
          <Logo src={wedLogo} alt="website logo" />
        </ImgContainer>

        <Innercontainer>
          <SideImgcontainer>
            <SideImg src={webRegister} alt="website register" />
          </SideImgcontainer>

          {this.renderForm()}
        </Innercontainer>
      </RegisterMainContainer>
    )
  }
}

export default Register
