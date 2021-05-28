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

import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(
    ()=>{
      AOS.init({duration: 1000});
      AOS.refresh();
    },[]
  );
  return (
    <>
    <Nav />
    <Presentation />
    <PressRelation />
    <Communication />
    <WritingOrgan />
    <Event />
    <Professional />
    <Education />
    <Footer />
    </>
  );
}

export default App;
