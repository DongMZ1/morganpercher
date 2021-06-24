import React, {useState, useEffect} from 'react'
import '../SCSS/main.scss'
import {SiGoogletranslate} from 'react-icons/si'
import {AiOutlineLinkedin, AiOutlineMenuUnfold} from 'react-icons/ai'
import {RiEnglishInput} from 'react-icons/ri'
import {Link} from 'react-scroll'
import { useTranslation } from 'react-i18next';



const Nav = ({innerWidth}) =>{
    const [showpressicons, setshowpressicon] = useState(true);
    const [langisfr, setlangisfr] = useState(true);
    const [translate, i18n ] = useTranslation();

    const shownavicon = () =>{
        if(showpressicons !== true){
            setshowpressicon(true);
        }else{
            setshowpressicon(false);
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
        setshowpressicon(true);
        }
        if(innerWidth < 1370){
            setshowpressicon(false);
            }
    }, [innerWidth]);

    const closemenusmallerthan750 = () =>{
        if(innerWidth < 1370){
            setshowpressicon(false);
        }
    }

   return <div className='navb' data-aos="fade-down">
       <div onClick={shownavicon} className='navbmenu'><AiOutlineMenuUnfold /><span style={{fontSize:'30px', paddingLeft:'5px', paddingRight:'5px'}}>Menu</span></div>
           
     {    showpressicons &&  
     <>
       <Link onClick={closemenusmallerthan750} className="link_bordergrow"
        style={{width:'110px', textDecoration:'none', color:'white'}}
         to='presentation' spy={true} smooth={true} duration={100}>
       {translate("nav.item1")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow"
        style={{width:'135px', textDecoration:'none', color:'white'}}
         to='pressrelation' spy={true} smooth={true} duration={100}>
       {translate("nav.item2")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow"
        style={{width:'220px', textDecoration:'none', color:'white' }}
         to='communication' spy={true} smooth={true} duration={100}>
       {translate("nav.item3")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow"
        style={{width:'90px', textDecoration:'none', color:'white'}}
         to='writingorgan' spy={true} smooth={true} duration={100}>
       {translate("nav.item4")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="link_bordergrow"
        style={{width:'220px', textDecoration:'none', color:'white'}}
         to='event' spy={true} smooth={true} duration={100}>
       {translate("nav.item5")}
       </Link>

       <Link onClick={closemenusmallerthan750}
        className="link_bordergrow" style={{width:'240px', textDecoration:'none', color:'white'}}
         to='prefessional' spy={true} smooth={true} duration={100}>
       {translate("nav.item6")}
       </Link>

       <Link onClick={closemenusmallerthan750}
        className="link_bordergrow" style={{width:'90px', textDecoration:'none', color:'white'}}
        to='education' spy={true} smooth={true} duration={100}>
       {translate("nav.item7")}
       </Link>

       <div className='translator' >CV</div>
       <a href='https://www.linkedin.com/in/morgan-percher-b78190170/'><AiOutlineLinkedin className='linkedinicon' fontSize='35px' /></a>
       <div onClick={changelang} className='translator' >{langisfr? 'En':'Fr'}</div>
       </>
     }
       </div>

}

export default Nav;