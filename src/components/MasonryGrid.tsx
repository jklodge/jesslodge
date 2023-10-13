import React, {useState, useEffect, useCallback} from "react"
import colours from "../colours"


import Daye from "../images/daye.png"
import tfa from "../images/tfa.png"
import PowWow from "../images/powwownow.png"
import GoogleAds from "../images/googleads.png"
import DayeVitals from "../images/vitals.png"
import PoemPortraits from "../images/poemportraits.png"
import MoulinRouge from "../images/moulinrouge.png"
import RadicalLux from "../images/radicallux.png"
import RotaHome from "../images/rota.png"
import RollingStones from "../images/rollingstones.png"
import Audemars from "../images/audemars.png"
import Zown from "../images/zown.png"
import Scouty from "../images/scouty.png"
import SevenBridges from "../images/sevenbridges.png"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import LoadingScreen from "./LoadingScreen"



const MasonryGrid = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [scrollY, setScrollY] = useState(0)
  const [hasLoaded, setHasLoaded] = useState(false);
  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
}, []);
  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1000)
    window.addEventListener("scroll", onScroll);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
       window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
  <Container hasScrolled={scrollY > 40} isHomePage={pathname === "/"} className="columns-2 md:columns-3 lg:columns-4 flex-wrap">
    {hasLoaded ? <>
     <ImageContainer href="/work/7bridges" className="mb-4">
          <StyledImage src={SevenBridges} alt="7Bridges App" priority width={200} height={200}/>
          <TextContainer>
            <h3>7Bridges - Logistics SAAS platform</h3>
            <p>Built with: React, Graphql, Apollo, Typescript</p>
          </TextContainer>
        </ImageContainer>
     
     <ImageContainer href="/work/zown" className="mb-4">
          <StyledImage src={Zown} alt="Zown App" priority width={200} height={200}/>
          <TextContainer>
            <h3>Zown - Dating app</h3>
            <p>App built with: Expo, React native</p>
            <p>Site built with: Contentful</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer href="/work/scouty" className="mb-4">
          <StyledImage src={Scouty} alt="Scouty App" priority width={200} height={200}/>
          <TextContainer>
            <h3>Scouty - Photo and film locations booking platform</h3>
            <p>Built with: NextJS, Node, Express, Prismic, Algolia</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer href="work/daye-blog" className="mb-4">
          <StyledImage src={DayeVitals} alt="Vitals website" priority width={200} height={200}/>
          <TextContainer>
            <h3>Daye - Blog Site</h3>
            <p>Built with: React, Typsecript, Gatsby, Node</p>
          </TextContainer>
        </ImageContainer>
   <ImageContainer className="mb-4" href="/work/rota" style={{width: 250}}>
          <StyledImage src={RotaHome} alt="Rota App" priority style={{width: 300}} width={300} height={250}/>
          <TextContainer>
            <h3>Rota - Members mobile application, iOS & Android</h3>
            <p>Built with: React native, React-Apollo, Redux, GraphQl</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer href="/work/moulin-rouge" style={{maxWidth: 350}} className="mb-4">
          <StyledImage src={MoulinRouge} alt="Sony Moulin Rouge website" priority width={200} height={200}/>
          <TextContainer>
            <h3>Sony - Moulin Rouge Character Match</h3>
            <p>Built with: Angular 2+, Typsecript, Spotify API</p>
          </TextContainer>
        </ImageContainer>
        
        <ImageContainer className="mb-4" href="/work/testing-for-all/">
          <StyledImage src={tfa} alt="testing-for-all website" width={200} height={200}/>
          <TextContainer>
            <h3>Testing For All - Covid Testing Kit Site</h3>
            <p>Built with: React, Material UI, Node</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer className="mb-4" href="/work/google-ads">
          <StyledImage src={GoogleAds} alt="Google ads website" width={200} height={200}/>
          <TextContainer>
            <h3>Google Ads</h3>
            <p>Maintained with: Angular, Python, Material UI</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer href="/work/powwownow" className="mb-4">
          <StyledImage src={PowWow} alt="PowWow website" width={200} height={200}/>
          <TextContainer>
            <h3>PowWowNow - Sign in/Sign up Journey</h3>
            <p>Built with: React, Python</p>
            <p>Site no longer available</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer href="/work/piguet-audemars" className="mb-4">
          <StyledImage src={Audemars} alt="Audemars site image" width={200} height={200}/>
          <TextContainer>
            <h3>Financial Times - Audemars Piguet Partnership</h3>
            <p>Built with: Vanilla JS, Hugo</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer className="mb-4" href="/work/daye-ecommerce">
          <StyledImage src={Daye} alt="Daye website" width={200} height={200}/>
          <TextContainer>
            <h3>Daye - Ecommerce</h3>
            <p>Built with: React, Typsecript, Gatsby, Node</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer className="mb-4" href="/work/selfridges-rolling-stones/">
          <StyledImage src={RollingStones} alt="RollingStones" width={200} height={200}/>
          <TextContainer>
            <h3>Selfridges - Rolling Stones Site</h3>
            <p>Built with: Vanilla JS/Adobe Experience Manager </p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer href="/work/poem-portraits" className="mb-4">
          <StyledImage src={PoemPortraits} alt="PoemPortraits" width={200} height={200}/>
          <TextContainer>
            <h3>Google Arts & Culture</h3>
            <p>Managed the build of this AI experience</p>
          </TextContainer>
        </ImageContainer>
        <ImageContainer className="mb-4" href="/work/selfridges-radical-luxury">
          <StyledImage src={RadicalLux} alt="RadicalLux" width={200} height={200}/>
          <TextContainer>
            <h3>Selfridges - Radical Luxury Site</h3>
            <p>Built with: Vanilla JS/Adobe Experience Manager </p>
          </TextContainer>
        </ImageContainer>  
    <Footer>© {new Date().getFullYear()}</Footer>
   </> : <LoadingScreen/> }
  </Container>
)
  }

export default MasonryGrid

const Container = styled.div<{isHomePage: boolean; hasScrolled: boolean}>`
  display: flex;
  background: ${colours.bgGray};
  position: relative;
  padding: 35px 60px;
  justify-content: space-around;
  width: 100%;
  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  p {
    color: #008b8b;
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    padding: 5px;
    padding-top: ${props => props.isHomePage && !props.hasScrolled ? '400px' : props.isHomePage && props.hasScrolled ? '230px':'180px'}
  }
`
const StyledImage = styled(Image)`
  display: block;
  margin: 0;
  width: 100%;
  background: transparent;
`

const ImageContainer = styled(Link)`
  box-shadow: 0 0 5px #ccc;
  margin: 30px 10px;
  height: fit-content;
  max-width: 400px;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 1800px) {
    max-width: 365px;
  }
`

const TextContainer = styled.div`
  padding: 25px;
  background: white;
`

const Footer = styled.footer`
  bottom: 0;
  position: absolute;
  margin: 11px;
`
