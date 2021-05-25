import React, {useState, useEffect} from 'react'
import '../SCSS/main.scss'
import {SiGoogletranslate} from 'react-icons/si'
import useWindowSize from "@rooks/use-window-size"
import {Link} from 'react-scroll'
import { useTranslation } from 'react-i18next';

const Nav = () =>{
    const [showicon, setshowicon] = useState('inline');
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
        }else{
            i18n.changeLanguage('fr'); 
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

   return <div className='navb' data-aos="fade-right">
       <div onClick={shownavicon} className="navbmenu">Menu</div>
       <Link className="link_bordergrow" style={{width:'110px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='presentation' spy={true} smooth={true} duration={100}>
       {translate("nav.item1")}
       </Link>

       <Link className="link_bordergrow" style={{width:'130px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='pressrelation' spy={true} smooth={true} duration={100}>
       {translate("nav.item2")}
       </Link>

       <Link className="link_bordergrow" style={{width:'220px', display: `${showicon}`, textDecoration:'none', color:'white' }} to='communication' spy={true} smooth={true} duration={100}>
       {translate("nav.item3")}
       </Link>

       <Link className="link_bordergrow" style={{width:'100px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='writingorgan' spy={true} smooth={true} duration={100}>
       {translate("nav.item4")}
       </Link>

       <Link className="link_bordergrow" style={{width:'200px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='event' spy={true} smooth={true} duration={100}>
       {translate("nav.item5")}
       </Link>

       <Link className="link_bordergrow" style={{width:'220px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='prefessional' spy={true} smooth={true} duration={100}>
       {translate("nav.item6")}
       </Link>

       <Link className="link_bordergrow" style={{width:'100px', display: `${showicon}`, textDecoration:'none', color:'white'}} to='education' spy={true} smooth={true} duration={100}>
       {translate("nav.item7")}
       </Link>

       <SiGoogletranslate onClick={changelang} style={{display: `${showicon}`}} className='translator' fontSize='35px' />
   </div>

}

export default Nav;