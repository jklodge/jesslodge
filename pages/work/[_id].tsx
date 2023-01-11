import React, { useEffect, useState } from "react"
import Sidebar from "../../src/components/Sidebar"
import styled from "styled-components"
import colours from "../../src/colours"
import {workObj} from "../../src/work"
import { useRouter } from "next/router"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { StyledContainer } from "../Homepage"

interface Work {
  title: string;
  description: string;
  image: StaticImageData;
  id: string;
  href?: string;
  builtWith?: string
}

const Work = () =>{
    const router = useRouter()
    const id = router.query._id
    const details: Work = workObj.filter((work) => work.id.toLowerCase() === id)[0]
    const [hasLoaded, setHasLoaded]= useState(false)
    useEffect(() => {
      if(details?.title) {
        setTimeout(() => {
          console.log('true:', true)
          setHasLoaded(true)

        }, 100)
      }
    },[details])

    return (
      <StyledContainer>
        {/* <Head><title>Lodge Creates</title></Head> */}
        <Sidebar  />
        <Container>
          {/* <motion.div style={{maxWidth: 900}}  animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 0.5 }}> */}
        <StyledTitle>{details?.title}</StyledTitle>
        <p>{details?.description}</p>
        <StyledBuiltWithText>{details?.builtWith}</StyledBuiltWithText>
        <Image priority src={details?.image} alt={details?.title}/>
        {details?.href && <StyledLink target="_blank" href={details?.href} rel="noreferrer">Explore the site</StyledLink>}
    {/* </motion.div> */}
        </Container>
    </StyledContainer>
)
}
export default Work

const Container = styled.div`
  width: 100%;
  padding: 60px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colours.bgGray};
  img {
    width: auto;
    height: 350px;
    margin: 20px auto;
    @media only screen and (max-width: 768px) {
      max-width: 400px;
      max-height: 400px;
      width: 90%;
      height: auto;
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 230px;
  
  }
`
const StyledBuiltWithText = styled.p`
  font-weight: 700;
  color: ${colours.purple};
  margin: 20px 0;

`

const StyledTitle = styled.h1`
  font-weight: 700;
  color: ${colours.black};
  font-size: 32px;
  margin-bottom: 20px;

`

const StyledLink = styled.a`
  font-weight: 500;
  color: ${colours.purple};
  text-align: center;
  &:hover {
    font-weight: 700;
  }

`
