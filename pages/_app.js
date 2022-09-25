import { useState } from "react";
import TransitionEffect from "../components/TransitionEffect";
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const [transitionEffect, setTransitionEffect] = useState();
  return (
    <TransitionEffect mode="wait">
      <Component {...pageProps} />
    </TransitionEffect>
  )
  
 
}

export default MyApp
