import styled from "styled-components"
import React from "react"
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";


const Social = () => (
  <Container className="contact">
    <AStyled target="_blank" href="https://github.com/jklodge">
      <AiFillGithub />
    </AStyled>
    <AStyled target="_blank" href="https://www.linkedin.com/in/jessicalodge/">
      <AiFillLinkedin />
    </AStyled>
    <AStyled
      target="_blank"
      href="mailto:jessicaklodge@gmail.com?subject=Jess Lodge"
    >
      <BsFillEnvelopeOpenFill />
    </AStyled>
  </Container>
)
export default Social

const Container = styled.div`
  display: flex;
  margin: 20px 0;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
  }
`

const AStyled = styled.a`
  margin: 5px;
  border: solid 1px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  &:hover svg {
    transform: scale(1.1);
  }

  svg {
    font-size: 1.4em;
  }
`
