import React from "react";
import "../SCSS/main.scss";
import testerimage from "../pictures/tester.jpg";
import {useTranslation} from 'react-i18next'
import item1 from '../pressrelation/item1.webp'

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
        <div className='regularcol'>
            <div className='regularcol_header'>CROISIC OCEARIUM</div>
            <img src={item1} />
            <p>A loggerhead turtle found washed up on a beach in Sarzeau</p>
            
            </div>
            {/**--------------------------------------------------------------------------- */}
        <div className='regularcol'><div className='regularcol_header'>CROISIC OCEARIUM</div>
            <p>A loggerhead turtle found washed up on a beach in Sarzeau</p></div>
            <div className='regularcol'><div className='regularcol_header'>CROISIC OCEARIUM</div>
            <p>A loggerhead turtle found washed up on a beach in Sarzeau</p></div>
            <div className='regularcol'><div className='regularcol_header'>CROISIC OCEARIUM</div>
            <p>A loggerhead turtle found washed up on a beach in Sarzeau</p></div>
            <div className='regularcol'><div className='regularcol_header'>CROISIC OCEARIUM</div>
            <p>A loggerhead turtle found washed up on a beach in Sarzeau</p></div>
            <div className='regularcol'><div className='regularcol_header'>CROISIC OCEARIUM</div>
            <p>A loggerhead turtle found washed up on a beach in Sarzeau</p></div>
            <div className='regularcol'><div className='regularcol_header'>CROISIC OCEARIUM</div>
            <p>A loggerhead turtle found washed up on a beach in Sarzeau</p></div>
      </div>
    </div>
  );
};
export default PressRelation;
