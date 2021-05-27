import React from 'react'
import '../SCSS/main.scss'
import testerimage from '../pictures/tester.jpg'

const PressRelation = () =>{
    return <div className='pressrelation' id='pressrelation' data-aos="fade-down-left">
           <div className='pressrelation_image_container'>
              <img src={testerimage} />
              <img src={testerimage} />
              <img src={testerimage} />
              <img src={testerimage} />
              <img src={testerimage} />
              <img src={testerimage} />
              </div>   
               
    </div>
}
export default PressRelation;