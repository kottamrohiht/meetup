import {NotContainer, NfImg, NfHeading, NfPara} from './styledComponents'

const NotFound = () => {
  const NfImgUrl =
    'https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png'

  return (
    <NotContainer>
      <NfImg src={NfImgUrl} alt="not found" />
      <NfHeading> Page Not Found </NfHeading>
      <NfPara> We are sorry, the page you requested could not be found </NfPara>
    </NotContainer>
  )
}

export default NotFound
