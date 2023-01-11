import Head from "next/head"
import Image from "next/image"
import React from "react"

import styled from "styled-components"
import colours from "../../src/colours"
import Sidebar from "../../src/components/Sidebar"
import ProfilePic from "../../src/images/jess.jpg"
import { StyledContainer } from "../Homepage"


const AboutPage = () => (
 <StyledContainer>
        <Head>
          <title>About Jess Lodge</title>
        </Head>
    <Sidebar  />
    <Container>
        <H1Styled>About Me</H1Styled>
        <PStyled>
        I am Jess, a software engineer born and based in London, having been a
        product manager previously, I understand the importance of pixel perfect
        development. I am passionate about bringing unique and important ideas to
        life. I love working on new projects and trialling different technologies,
        most recently working for a SASS logistics startup, whilst also mentoring and training girls for Coding Black Females. 
        I have created and developed a variety of projects both personally and
        professionally, so please feel free to click and explore.
        </PStyled>
        <Image src={ProfilePic} alt="me" />
    </Container>
  </StyledContainer>
)

export default AboutPage

const Container = styled.div`
  width: 100%;
  padding: 60px;
  min-height: 100vh;
  height: 100%;
  background: ${colours.bgGray};
  img {
    border-radius: 30%;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 230px;
  }
`

const H1Styled = styled.h1`
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 28px;

  }
`

const PStyled = styled.p`  
font-size: 20px;
margin-bottom: 20px;
@media only screen and (max-width: 768px) {
  font-size: 16px;

}
`
