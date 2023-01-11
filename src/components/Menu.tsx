import React from "react"
import styled from "styled-components"
import Social from "./Social"
import Link from "next/link"

const Menu = ({ closeModal }:any) => {
  return (
    <Container>
      <LinkStyled onClick={() => closeModal()}  href="/">
        <H1Styled>Work</H1Styled>
      </LinkStyled>
      <LinkStyled
        onClick={() => closeModal()}
        href="/about"
      >
        <H1Styled>About Me</H1Styled>
      </LinkStyled>

      <Social />
    </Container>
  )
}

export default Menu

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const H1Styled = styled.h1`
  text-transform: uppercase;
  font-size: 22px;
  text-align: center;
  margin: 0 -20px;
  color: #000;
  text-shadow: 1px 1px #ccc;
  margin: 0;
  width: auto;
  @media only screen and (max-width: 768px) {
    padding: 0;
    width: 280px;
  }
`

const LinkStyled = styled(Link)`
  color: black;
  cursor: pointer;
  font-weight: 700;
  padding: 20px;
  &:hover {
    transform: scale(1.1);
  }
`
