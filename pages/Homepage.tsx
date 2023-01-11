import React, {useState, useEffect} from "react"
import MasonryGrid from "../src/components/MasonryGrid"
import Head from 'next/head'
import styled from "styled-components"

import Sidebar from "../src/components/Sidebar"
import colors from "../src/colours"
import LoadingScreen from "../src/components/LoadingScreen"

export const StyledContainer = styled.div`

display: flex;
@media only screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const Homepage = () =>{
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0)
      setTimeout(() => {
        setLoaded(true)
      }, 500)
    }, [])
  
    return (
      loaded ? <StyledContainer>
        <Head><title>Jess Lodge - Lodge creates</title></Head>
        <Sidebar  />
        <MasonryGrid/>
    </StyledContainer> : <LoadingScreen/>
)
}
export default Homepage