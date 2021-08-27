import React, {useState, useEffect} from 'react'
import '../SCSS/main.scss'
import {SiGoogletranslate} from 'react-icons/si'
import {AiOutlineLinkedin, AiOutlineMenuUnfold} from 'react-icons/ai'
import {RiEnglishInput} from 'react-icons/ri'
import {HiPresentationChartBar} from 'react-icons/hi'
import {Link} from 'react-scroll'
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group'
import CV from '../CV.pdf'



const Nav = ({innerWidth}) =>{
    const [showpressicons, setshowpressicon] = useState(true);
    const [showothericons, setshowothericons] = useState(false);
    const [langisfr, setlangisfr] = useState(true);
    const [translate, i18n ] = useTranslation();

    const shownavicon = () =>{
        if(showpressicons !== true){
            setshowpressicon(true);
            setshowothericons(true)
        }else{
            setshowpressicon(false);
            setshowothericons(false);
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
        if(innerWidth > 1000){
        setshowpressicon(true);
        setshowothericons(false);
        }
        if(innerWidth < 1000){
            setshowpressicon(false);
            setshowothericons(false);
            }
    }, [innerWidth]);

    const closemenusmallerthan750 = () =>{
      if(innerWidth >= 1000){
        //setshowpressicon(false);
        setshowothericons(false);
    }
        if(innerWidth < 1000){
            setshowpressicon(false);
            setshowothericons(false);
        }
    }

   return <div className='navb' data-aos="fade-down">

    <div onClick={shownavicon} className='navbmenu'><AiOutlineMenuUnfold />
       <span style={{fontSize:'30px', paddingLeft:'5px', paddingRight:'5px'}}>Menu</span>
       </div>

       {showpressicons && 
         
         <Link onClick={closemenusmallerthan750} className="naviicon"
          style={{textDecoration:'none'}}
           to='presentation' spy={true} smooth={true} duration={100}>
         {translate("nav.item1")}
         </Link>}

       <span className='outerdropdownwrapper'>

       <div onClick={()=>setshowothericons(state => !state)}
       className='pressdropdown'><HiPresentationChartBar /></div>

       <CSSTransition in={showothericons} timeout={300} classNames="item" unmountOnExit>
       <div className='dropdownwrapper'>
       <Link onClick={closemenusmallerthan750} className="naviicon"
        style={{textDecoration:'none'}}
         to='pressrelation' spy={true} smooth={true} duration={100}>
       {translate("nav.item2")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="naviicon"
        style={{textDecoration:'none'}}
         to='communication' spy={true} smooth={true} duration={100}>
       {translate("nav.item3")}
       </Link>

       <Link onClick={closemenusmallerthan750} className="naviicon"
        style={{textDecoration:'none'}}
         to='writingorgan' spy={true} smooth={true} duration={100}>
       {translate("nav.item4")}
       </Link>
       
       <Link onClick={closemenusmallerthan750} className="naviicon"
        style={{textDecoration:'none'}}
         to='event' spy={true} smooth={true} duration={100}>
       {translate("nav.item5")}
       </Link>
      
       </div>
       </CSSTransition>
       </span>
     
       
       {showpressicons && <>
         
       <Link onClick={closemenusmallerthan750}
        className="naviicon" style={{textDecoration:'none'}}
         to='prefessional' spy={true} smooth={true} duration={100}>
       {translate("nav.item6")}
       </Link>

       <Link onClick={closemenusmallerthan750}
        className="naviicon" style={{textDecoration:'none'}}
        to='education' spy={true} smooth={true} duration={100}>
       {translate("nav.item7")}
       </Link>

       <a style={{textDecoration:'none'}} href={CV}><div className='translator' >CV</div></a>
       <div>
       <a href='https://www.linkedin.com/in/morgan-percher-b78190170/'>
         <AiOutlineLinkedin className='linkedinicon' fontSize='35px' /></a>
         </div>
       <div onClick={changelang} className='translator' >{langisfr? 'En':'Fr'}</div>

       </>}

     </div>

}

export default Nav;