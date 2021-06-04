import React from 'react'
import '../SCSS/main.scss'
import { useTranslation } from "react-i18next";
//images
import p1 from "../writing/p1.webp";
import p2 from "../writing/p2.webp";
import p3 from "../writing/p3.webp";
import p4 from "../writing/p4.webp";
import p5 from "../writing/p5.webp";
import p6 from "../writing/p6.webp";
import p7 from "../writing/p7.webp";
import p8 from "../writing/p8.webp";
import p9 from "../writing/p9.webp";
import p10 from "../writing/p10.webp";
import p11 from "../writing/p11.webp";
import p12 from "../writing/p12.webp";

//file links
import pdf1 from '../writing/pdf1.pdf'
import pdf2 from '../writing/pdf2.pdf'
import pdf3 from '../writing/pdf3.pdf'
import pdf4 from '../writing/pdf4.pdf'
import pdf5 from '../communication/p5.pdf'
import pdf6 from '../communication/p6.pdf'
import pdf7 from '../communication/p7.pdf'
import pdf8 from '../communication/p8.pdf'

import { FiLink } from "react-icons/fi";
const WritingOrgan = () =>{

    const [translate, i18n] = useTranslation();

    return <div className="writingorgan" id="writingorgan">
    <div className="header" data-aos="fade-down-right">
       Writing
    </div>
    <div className="headermiddle" />
    <div className="writingorgan_grid_container">
      {/**----------------------------------------------------------------------------- */}
      <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
        <div className="regularcol_header">
          <a href={pdf1} className="link" style={{ textDecoration: "none" }}>
           {translate("communication.item2")} <FiLink />
          </a>
        </div>
        <a href={pdf1} className="link" style={{ textDecoration: "none" }}><img src={p1} /></a>
        <p><b>{translate("communication.company")}</b>{translate("communication.item3")}</p>
        <p><b>{translate("communication.project")}</b>{translate("communication.item4")}</p>
        <p><b>Mission: </b>{translate("communication.item5")}</p>
      </div>
      {/**----------------------------------------------------------------------------- */}
      <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
        <div className="regularcol_header">
          <a href={pdf2} className="link" style={{ textDecoration: "none" }}>
          {translate("communication.item6")} <FiLink />
          </a>
        </div>
        <a href={pdf2} className="link" style={{ textDecoration: "none" }}><img src={p2} /></a>
        <p><b>{translate("communication.company")}</b>{translate("communication.item7")}</p>
        <p><b>{translate("communication.project")}</b>{translate("communication.item8")}</p>
        <p><b>Mission: </b>{translate("communication.item9")}</p>
      </div>
      {/**----------------------------------------------------------------------------- */}
      <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
        <div className="regularcol_header">
          <a href={pdf3} className="link" style={{ textDecoration: "none" }}>
          {translate("communication.item10")} <FiLink />
          </a>
        </div>
        <a href={pdf3} className="link" style={{ textDecoration: "none" }}><img src={p3} /></a>
        <p><b>{translate("communication.company")}</b>{translate("communication.item11")}</p>
        <p><b>{translate("communication.project")}</b>{translate("communication.item12")}</p>
        <p><b>Mission: </b>{translate("communication.item13")}</p>
      </div>
      {/**----------------------------------------------------------------------------- */}
      <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
        <div className="regularcol_header">
          <a className="link" href={pdf4} style={{ textDecoration: "none" }}>
          {translate("communication.item14")} <FiLink />
          </a>
        </div>
        <a className="link" href={pdf4} style={{ textDecoration: "none" }}><img src={p4} /></a>
        <p><b>{translate("communication.company")}</b>{translate("communication.item15")}</p>
        <p><b>{translate("communication.project")}</b>{translate("communication.item16")}</p>
        <p><b>Mission: </b>{translate("communication.item17")}</p>
      </div>
      {/**----------------------------------------------------------------------------- */}
      <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
        <div className="regularcol_header">
          <a className="link" style={{ textDecoration: "none" }}>
          {translate("communication.item18")} <FiLink />
          </a>
        </div>
        <a className="link" style={{ textDecoration: "none" }}><img src={p5} /></a>
        <p><b>{translate("communication.company")}</b>{translate("communication.item19")}</p>
        <p><b>{translate("communication.project")}</b>{translate("communication.item20")}</p>
        <p><b>Mission: </b>{translate("communication.item21")}</p>
      </div>
      {/**----------------------------------------------------------------------------- */}
      <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
        <div className="regularcol_header">
          <a className="link" style={{ textDecoration: "none" }}>
          {translate("communication.item22")} <FiLink />
          </a>
        </div>
        <a className="link" style={{ textDecoration: "none" }}><img src={p6} /></a>
        <p><b>{translate("communication.company")}</b>{translate("communication.item23")}</p>
        <p><b>{translate("communication.project")}</b>{translate("communication.item24")}</p>
        <p><b>Mission: </b>{translate("communication.item25")}</p>
      </div>
      {/**----------------------------------------------------------------------------- */}
      <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
        <div className="regularcol_header">
          <a className="link" style={{ textDecoration: "none" }}>
          {translate("communication.item26")} <FiLink />
          </a>
        </div>
        <a className="link" style={{ textDecoration: "none" }}><img src={p7} /></a>
        <p><b>{translate("communication.company")}</b>{translate("communication.item27")}</p>
        <p><b>Client: </b>{translate("communication.item28")}</p>
        <p><b>{translate("communication.project")}</b>{translate("communication.item29")}</p>
        <p><b>Mission: </b>{translate("communication.item30")}</p>
      </div>
      {/**----------------------------------------------------------------------------- */}
      <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
        <div className="regularcol_header">
          <a className="link" style={{ textDecoration: "none" }}>
          {translate("communication.item31")} <FiLink />
          </a>
        </div>
        <a className="link" style={{ textDecoration: "none" }}><img src={p8} /></a>
        <p><b>{translate("communication.company")}</b>{translate("communication.item32")}</p>
        <p><b>Client: </b>{translate("communication.item33")}</p>
        <p><b>{translate("communication.project")}</b>{translate("communication.item34")}</p>
        <p><b>Mission: </b>{translate("communication.item35")}</p>
      </div>
      {/**------------------------------------------------------------------------------- */}
    </div>
    {/**end of container ---------------------------------------------------------- */}
  </div>  
}

export default WritingOrgan;