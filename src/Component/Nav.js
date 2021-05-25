import React, {useState, useEffect} from 'react'
import '../SCSS/main.scss'
import {SiGoogletranslate} from 'react-icons/si'
import useWindowSize from "@rooks/use-window-size"
import {Link} from 'react-scroll'

const Nav = () =>{
    const [showicon, setshowicon] = useState('inline');
    const {innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

    const shownavicon = () =>{
        if(showicon != 'inline'){
            setshowicon('inline');
        }else{
            setshowicon('none');
        }
    }
    useEffect(() => {
        if(innerWidth > 750){
        setshowicon('inline');
        }
        if(innerWidth < 750){
            setshowicon('none');
            }
    }, [innerWidth]);
   return <div className='navb' data-aos="fade-down">
       <div onClick={shownavicon} className="navbmenu">Menu</div>

       <Link className="link_bordergrow" style={{width:'130px', display: `${showicon}`, textDecoration:'none'}} to='presentation' spy={true} smooth={true} duration={100}>
       Presentation
       </Link>

       <Link className="link_bordergrow" style={{width:'160px', display: `${showicon}`, textDecoration:'none'}} to='pressrelation' spy={true} smooth={true} duration={100}>
       Press relations
       </Link>

       <Link className="link_bordergrow" style={{width:'200px', display: `${showicon}`, textDecoration:'none' }} to='communication' spy={true} smooth={true} duration={100}>
       Communication Media
       </Link>

       <Link className="link_bordergrow" style={{width:'100px', display: `${showicon}`, textDecoration:'none'}} to='writingorgan' spy={true} smooth={true} duration={100}>
       Writing
       </Link>

       <Link className="link_bordergrow" style={{width:'130px', display: `${showicon}`, textDecoration:'none'}} to='event' spy={true} smooth={true} duration={100}>
           Event
       </Link>

       <Link className="link_bordergrow" style={{width:'210px', display: `${showicon}`, textDecoration:'none'}} to='prefessional' spy={true} smooth={true} duration={100}>
           Professional experiences
       </Link>

       <Link className="link_bordergrow" style={{width:'130px', display: `${showicon}`, textDecoration:'none'}} to='education' spy={true} smooth={true} duration={100}>
        Education
       </Link>

       <SiGoogletranslate style={{display: `${showicon}`}} className='translator' fontSize='35px' />
   </div>

}

export default Nav;