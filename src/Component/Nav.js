import React, {useState, useEffect} from 'react'
import '../SCSS/main.scss'
import {SiGoogletranslate} from 'react-icons/si'
import useWindowSize from "@rooks/use-window-size"
import {Link} from 'react-scroll'
import { useTranslation } from 'react-i18next';

const Nav = () =>{
    const [showicon, setshowicon] = useState('inline');
    const [t, i18n ] = useTranslation();
    const {innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

    const shownavicon = () =>{
        if(showicon != 'inline'){
            setshowicon('inline');
        }else{
            setshowicon('none');
        }
    }

    const changelang = () =>{
        i18n.changeLanguage('fr');
    }
    useEffect(() => {
        if(innerWidth > 750){
        setshowicon('inline');
        }
        if(innerWidth < 750){
            setshowicon('none');
            }
    }, [innerWidth]);

   return <div className='navb' data-aos="fade-right">
       <div onClick={shownavicon} className="navbmenu">Menu</div>

       <Link className="link_bordergrow" style={{width:'130px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='presentation' spy={true} smooth={true} duration={100}>
       presentation part
       </Link>

       <Link className="link_bordergrow" style={{width:'160px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='pressrelation' spy={true} smooth={true} duration={100}>
       Press relations
       </Link>

       <Link className="link_bordergrow" style={{width:'200px', display: `${showicon}`, textDecoration:'none', color:'white' }} to='communication' spy={true} smooth={true} duration={100}>
       Communication Media
       </Link>

       <Link className="link_bordergrow" style={{width:'100px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='writingorgan' spy={true} smooth={true} duration={100}>
       Writing
       </Link>

       <Link className="link_bordergrow" style={{width:'130px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='event' spy={true} smooth={true} duration={100}>
           Event
       </Link>

       <Link className="link_bordergrow" style={{width:'210px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='prefessional' spy={true} smooth={true} duration={100}>
           Professional experiences
       </Link>

       <Link className="link_bordergrow" style={{width:'130px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='education' spy={true} smooth={true} duration={100}>
        Education
       </Link>

       <SiGoogletranslate style={{display: `${showicon}`}} className='translator' fontSize='35px' />
   </div>

}

export default Nav;