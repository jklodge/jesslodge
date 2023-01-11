import '../styles/globals.css'
import React, {useState, useEffect} from "react"
import type { AppProps } from 'next/app'
import LoadingScreen from '../src/components/LoadingScreen';

export default function App({ Component, pageProps }: AppProps) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    hasLoaded ? (
  <Component {...pageProps} />
    ):(
      <LoadingScreen/>
    )
  )
}
