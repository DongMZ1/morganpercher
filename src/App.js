import React, {useEffect, useState} from 'react'
import './App.css';
import './SCSS/main.scss'
//component
import Nav from './Component/Nav'
import Communication from './Component/Communication'
import Education from './Component/Education'
import Presentation from './Component/Presentation'
import PressRelation from './Component/PressRelation'
import Professional from './Component/Professional'
import WritingOrgan from './Component/Writing'
import Footer from './Component/Footer'
import Event from './Component/Event'

import "aos/dist/aos.css";
import AOS from 'aos';
import useWindowSize from "@rooks/use-window-size"

import AnimatedCursor from "react-animated-cursor";

function App() {
  const {innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  useEffect(
    ()=>{
      AOS.init({duration: 1000});
      AOS.refresh();
    },[]
  );
  return (
    //when use aos, we need include overflow-x hidden not in body, html but a wrapper
    <div style={{overflowX: 'hidden'}}>
    
    <Nav innerWidth={innerWidth} />
   <Presentation innerWidth={innerWidth} />
    
    <PressRelation />
    <Communication />
    <WritingOrgan />
    <Event />
    <Professional />
    <Education />
    <Footer />
    </div>
  );
}

export default App;
