import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import Social from "./Social"
import { useRouter } from "next/router"
import { ImEye } from "react-icons/im";
import { RxEyeClosed } from "react-icons/rx";
import { isMobile } from "react-device-detect"

import colours from "../colours"
import Link from "next/link"

 const Sidebar = () => {
  const [scrollY, setScrollY] = useState(0)
  const [welcomeText, setWelcomeText] = useState("")
  const [isMobileScren, setIsMobileScreen] = useState(false)

  const router = useRouter();
  const pathname = router.pathname;
  const isHomePage = pathname === "/";
  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
}, []);

    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 728) {
          setIsMobileScreen(true)
      } else {
          setIsMobileScreen(false)
      }
    }
    
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)
      return () => {
        window.addEventListener("resize", handleResize)
      }
    })
    

  useEffect(() => {
    const today = new Date()
    const curHr = today.getHours()
    if (curHr < 12) {
      setWelcomeText("good morning")
    } else if (curHr < 18) {
      setWelcomeText("good afternoon")
    } else {
      setWelcomeText("good evening")
    }
    window.addEventListener("scroll", onScroll);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
       window.removeEventListener("scroll", onScroll);
    }
  }, [])
const isMobileDeviceOrScreen = isMobileScren || isMobile;
  return (
    <Container className="columns-1 md:columns-1 lg:columns-1">
      <Link  href="/">
        <H1Styled>{welcomeText}</H1Styled>
      </Link>
      {isHomePage && isMobileDeviceOrScreen && scrollY < 40 && (
        <PStyled>
          A software engineer based in London. I am passionate
          about bringing fun, meaningful and unique ideas to life. I&apos;m looking 
          for projects where I can have a positive impact on my community. 
          Explore my work & tell me what you think!
        </PStyled>
      )}
      {!isMobileDeviceOrScreen && (
        <PStyled>
          A software engineer based in London. I am passionate
          about bringing fun, meaningful and unique ideas to life. I&apos;m looking 
          for projects where I can have a positive impact on my community.  Here is a
          selection of projects I have worked on professionally, plus my own
          projects. Please feel free to explore my work & tell me what you think!
        </PStyled>
      )}
        <LinkContainer>
            <LinkStyled1 href="/">
              Work {pathname.includes("about") ? <RxEyeClosed/> :<ImEye/>}
            </LinkStyled1>
          <LinkStyled1 href="/about">
            About Me  {!pathname.includes("about") ? <RxEyeClosed />:<ImEye/>}
          </LinkStyled1>
        </LinkContainer>

     <Social />
    </Container>
  )
}
export default Sidebar
const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 60px;
  max-width: 360px;
  min-width: 420px;
  min-height: 100vh;
  a {
    text-decoration: none;
  }
  button {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media only screen and (max-width: 768px) {
    width:100vw;
    max-width: 100%;
    min-height: 180px;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 60px 20px;
    margin: auto;
    background: rgb(244, 244, 244);
    z-index: 1;
    position: fixed;
    padding: 30px;
  }
  @media only screen and (max-width: 378px) {
    min-width: 315px;
    width: 100vw;
    padding: 50px;
    padding-bottom: 20px;
  }
`

const H1Styled = styled.h1`
  text-transform: uppercase;
  font-size: 22px;
  background-color: ${colours.bgGray};
  border: solid 15px ${colours.bgGray};
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
const PStyled = styled.p`
  margin-top: 20px;
  font-size: 17px;
  @media only screen and (max-width: 768px) {
  padding: 0 20px;
  }
  `


const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  padding: 0;
  margin: 20px 0 0;
  justify-content: space-around;
  width: 100%;
  gap: 5px;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
  }
  `;

const LinkStyled1 = styled(Link)`
  color: black;
  cursor: pointer;
  font-weight: 700;
  display: flex;
    align-items: center;
    text-decoration: none;
    gap: 10px;
  &:hover {
    transform: scale(1.1);
  }
`
