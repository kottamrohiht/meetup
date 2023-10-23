import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HomeMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

export const HomeHeading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 600;
  margin: 0px;
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 8vh;
  padding: 5px;
`

export const Logo = styled.img`
  height: 70%;
`

export const WelcomeContainer = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RegisterHeading = styled.h1`
  margin: 0px;
`

export const Para = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const RegisterButton = styled.button`
  border: 0px;
  color: white;
  width: 100px;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #2563eb;
  cursor: pointer;
`

export const MeetupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50vh;
`

export const MeetupImg = styled.img`
  height: 80%;
`

export const LinkEl = styled(Link)`
  text-decoration: none;
`
