import React, {useState} from 'react'
import '../SCSS/main.scss'
import video from '../Video/tester.mp4'

const Presentation = () =>{
    const [playvideo, setplayvideo] = useState(true);
    const playorparsevideo = () =>{
        const v = document.getElementById('firstvideo');
            if(playvideo === true){
            v.pause();
            setplayvideo(false);
            }else{
                v.play();
                setplayvideo(true);
            }
    }

    return <div className='presentation' id='presentation' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
         
        <div onClick={playorparsevideo} className='presentation_video_container'>
             <video autoPlay loop width='100%' id='firstvideo'>
                 <source src={video} type='video/mp4' />
             </video>
             <div className='presentation_videocontenttop'>
                 hello 
              </div>
              </div>
                 
 
        
    </div>;
}
export default Presentation;