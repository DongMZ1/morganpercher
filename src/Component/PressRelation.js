import React from "react";
import "../SCSS/main.scss";
import testerimage from "../pictures/tester.jpg";
import { useTranslation } from "react-i18next";
//images
import item1 from "../pressrelation/item1.webp";
import item2 from "../pressrelation/item2.webp";
import item3 from "../pressrelation/item3.webp";
import item4 from "../pressrelation/item4.webp";
import item5 from "../pressrelation/item5.webp";
import item6 from "../pressrelation/item6.webp";
import item7 from "../pressrelation/item7.webp";
import item8 from "../pressrelation/item8.webp";
//file links
import pdf1 from '../pressrelation/pdf1.pdf';
import pdf2 from '../pressrelation/pdf2.pdf';
import pdf3 from '../pressrelation/pdf3.pdf';
import pdf4 from '../pressrelation/pdf4.pdf';
import pdf5 from '../pressrelation/pdf5.pdf';
import pdf6 from '../pressrelation/pdf6.pdf';
import pdf7 from '../pressrelation/pdf7.pdf';
import pdf8 from '../pressrelation/pdf8.pdf';
import pdf9 from '../pressrelation/pdf9.pdf';

import { FiLink } from "react-icons/fi";

const PressRelation = () => {
  const [translate, i18n] = useTranslation();
  return (
    <div className="pressrelation" id="pressrelation">
      <div className="header" data-aos="fade-down-left">
        {translate("pressrelation.item1")}
      </div>
      <div className="headermiddle">
        Présentation de l'ensemble des communiqués et dossiers de presse que
        j'ai réalisé.
      </div>
      <div className="pressrelation_grid_container">
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf1} className="link" style={{ textDecoration: "none" }}>
              {translate("pressrelation.item2")} <FiLink />
            </a>
          </div>
          <img src={item1} />
          <p>{translate("pressrelation.item3")}</p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf2} className="link" style={{ textDecoration: "none" }}>
              {translate("pressrelation.item4")} <FiLink />
            </a>
          </div>
          <img src={item2} />
          <p>{translate("pressrelation.item5")}</p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf3} className="link" style={{ textDecoration: "none" }}>
              {translate("pressrelation.item6")} <FiLink />
            </a>
          </div>
          <img src={item3} />
          <p>{translate("pressrelation.item7")}</p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a className="link" href={pdf4} style={{ textDecoration: "none" }}>
              {translate("pressrelation.item8")} <FiLink />
            </a>
          </div>
          <img src={item4} />
          <p>{translate("pressrelation.item9")}</p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a className="link" href={pdf5} style={{ textDecoration: "none" }}>
              {translate("pressrelation.item10")} <FiLink />
            </a>
          </div>
          <img src={item5} />
          <p>{translate("pressrelation.item11")}</p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf6} className="link" style={{ textDecoration: "none" }}>
              {translate("pressrelation.item12")} <FiLink />
            </a>
          </div>
          <img src={item6} />
          <p>{translate("pressrelation.item13")}</p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf7} className="link" style={{ textDecoration: "none" }}>
              {translate("pressrelation.item14")} <FiLink />
            </a>
          </div>
          <img src={item7} />
          <p>{translate("pressrelation.item15")}</p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf8} className="link" style={{ textDecoration: "none" }}>
              {translate("pressrelation.item16")} <FiLink />
            </a>
          </div>
          <img src={item8} />
          <p>{translate("pressrelation.item17")}</p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-right" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf9} className="link" style={{ textDecoration: "none" }}>
              {translate("pressrelation.item18")} <FiLink />
            </a>
          </div>
          <p>{translate("pressrelation.item19")}</p>
        </div>
      </div>
    </div>
  );
};
export default PressRelation;
