import React from "react";
import "../SCSS/main.scss";
import testerimage from "../pictures/tester.jpg";
import {useTranslation} from 'react-i18next'

const PressRelation = () => {
    const [translate, i18n] = useTranslation();
  return (
    <div className="pressrelation" id="pressrelation">
      <div className="header" data-aos="fade-down-left">
        {translate("pressrelation.item1")}
      </div>
      <div className="headermiddle">Présentation de l'ensemble des communiqués et dossiers de presse que
          j'ai réalisé.</div>
      <div className="pressrelation_grid_container">
        <div className='regularcol'>hello</div>
        <div className='regularcol'>hello</div>
        <div className='regularcol'>hello</div>
        <div className='regularcol'>hello</div>
        <div className='regularcol'>hello</div>
        <div className='regularcol'>hello</div>
        <div className='regularcol'>hello</div>
      </div>
    </div>
  );
};
export default PressRelation;
