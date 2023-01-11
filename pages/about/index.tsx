import Image from "next/image"
import React from "react"

import styled from "styled-components"
import colours from "../../src/colours"
import Sidebar from "../../src/components/Sidebar"
import ProfilePic from "../../src/images/jess.jpg"
import { StyledContainer } from "../Homepage"


const AboutPage = () => (
 <StyledContainer>
    <Sidebar  />
    <Container>
        <H1Styled>About Me</H1Styled>
        <PStyled>
        I am Jess, a Front-end developer based and born in London, having been a
        product manager previously, I understand the importance of pixel perfect
        development. I am passionate about bringing unique and important ideas to
        life. I love working on new projects and trialling different technologies,
        most recently volunteering for a Covid19 not for profit organisation,
        whilst also continuing my work at a women&apos;s health start-up. I have
        created and developed a variety of projects both personally and
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
