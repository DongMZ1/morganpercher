import React, {useState, useEffect} from 'react'
import '../SCSS/main.scss'
import {SiGoogletranslate} from 'react-icons/si'
import {AiOutlineLinkedin, AiOutlineMenuUnfold} from 'react-icons/ai'
import {RiEnglishInput} from 'react-icons/ri'
import useWindowSize from "@rooks/use-window-size"
import {Link} from 'react-scroll'
import { useTranslation } from 'react-i18next';



const Nav = () =>{
    const [showicon, setshowicon] = useState('inline');
    const [langisfr, setlangisfr] = useState(true);
    const [translate, i18n ] = useTranslation();
    const {innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

    const shownavicon = () =>{
        if(showicon != 'inline'){
            setshowicon('inline');
        }else{
            setshowicon('none');
        }
    }

    const changelang = () =>{
        if(i18n.language == 'fr'){
        i18n.changeLanguage('en');
        setlangisfr(false);
        }else{
            i18n.changeLanguage('fr'); 
            setlangisfr(true);
        }
    }
    useEffect(() => {
        if(innerWidth > 1370){
        setshowicon('inline');
        }
        if(innerWidth < 1370){
            setshowicon('none');
            }
    }, [innerWidth]);

    const closemenusmallerthan750 = () =>{
        if(innerWidth < 1370){
            setshowicon('none');
        }
    }

   return <div className='navb' data-aos="fade-down">
       <div onClick={shownavicon} className='navbmenu'><AiOutlineMenuUnfold /><span style={{fontSize:'30px', paddingLeft:'5px', paddingRight:'5px'}}>Menu</span></div>
       <Link onClick={closemenusmallerthan750} className="link_bordergrow" style={{width:'110px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='presentation' spy={true} smooth={true} duration={100}>
       {translate("nav.item1")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow" style={{width:'135px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='pressrelation' spy={true} smooth={true} duration={100}>
       {translate("nav.item2")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow" style={{width:'220px', display: `${showicon}`, textDecoration:'none', color:'white' }} to='communication' spy={true} smooth={true} duration={100}>
       {translate("nav.item3")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow" style={{width:'90px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='writingorgan' spy={true} smooth={true} duration={100}>
       {translate("nav.item4")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow" style={{width:'220px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='event' spy={true} smooth={true} duration={100}>
       {translate("nav.item5")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow" style={{width:'240px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='prefessional' spy={true} smooth={true} duration={100}>
       {translate("nav.item6")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow" style={{width:'90px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='education' spy={true} smooth={true} duration={100}>
       {translate("nav.item7")}
       </Link>
       <div style={{display: `${showicon}`}} className='translator' >CV</div>
       <a href='https://www.linkedin.com/in/morgan-percher-b78190170/'><AiOutlineLinkedin style={{display: `${showicon}`}} className='linkedinicon' fontSize='35px' /></a>
       <div onClick={changelang} style={{display: `${showicon}`}} className='translator' >{langisfr? 'En':'Fr'}</div>
   </div>

}

export default Nav;