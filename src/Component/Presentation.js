import React from 'react'
import '../SCSS/main.scss'
import video from '../Video/tester.mp4'

const Presentation = () =>{
    return <div className='presentation' id='presentation' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        
             <video autoPlay loop style={{width: '100%', position:'absolute'}}>
                 <source src={video} type='video/mp4'></source>
             </video>
        
    </div>;
}
export default Presentation;