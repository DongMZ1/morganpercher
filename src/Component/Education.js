import React from "react";
import "../SCSS/main.scss";
import { useTranslation } from "react-i18next";

const Education = () => {
    const [translate, i18n] = useTranslation();
  return (
    <div className="education" id="education">

<div class="entry">
    <div class="body" data-aos="fade-left">
     <h1>{translate("nav.item7")}</h1>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h4 data-aos="fade-right">2015 - 2016</h4>
    </div>
    <div class="body" data-aos="fade-left">
      <ul>
        <li><b>{translate("edu.item1a")} (Evreux - Fr)</b></li>
        <li><b>{translate("edu.degree")}</b>{translate("edu.item1b")}</li>
        <li><b>{translate("edu.study")}</b>{translate("edu.item1c")}</li>
        <li><b>{translate("edu.result")}</b>{translate("edu.item1d")}</li>
      </ul>
    </div>
  </div>

 <div class="entry">
    <div class="title">
      <h4 data-aos="fade-right">2013 - 2015</h4>
    </div>
    <div class="body" data-aos="fade-left">
      <ul>
        <li><b>{translate("edu.item2a")} (Rouen – Fr)</b></li>
        <li><b>{translate("edu.degree")}</b>{translate("edu.item2b")}</li>
        <li><b>{translate("edu.study")}</b>{translate("edu.item2c")}</li>
        <li><b>{translate("edu.result")}</b>{translate("edu.item2d")}</li>
      </ul>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h4 data-aos="fade-right">2011 - 2013</h4>
    </div>
    <div class="body" data-aos="fade-left">
      <ul>
        <li><b>{translate("edu.item3a")} (Paris – Fr)</b></li>
        <li><b>{translate("edu.degree")}</b>{translate("edu.item3b")}</li>
        <li><b>{translate("edu.study")}</b>{translate("edu.item3c")}</li>
        <li><b>{translate("edu.result")}</b>{translate("edu.item3d")}</li>
      </ul>
    </div>
  </div>


  <div class="entry">
    <div class="title">
      <h4 data-aos="fade-right">2011</h4>
    </div>
    <div class="body" data-aos="fade-left">
      <ul>
        <li><b>{translate("edu.item6a")} (Le Havre – Fr)</b></li>
        <li><b>{translate("edu.degree")}</b>{translate("edu.item6b")}</li>
        <li><b>{translate("edu.study")}</b>{translate("edu.item6c")}</li>
        <li><b>{translate("edu.result")}</b>{translate("edu.item6d")}</li>
      </ul>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h4 data-aos="fade-right">2010</h4>
    </div>
    <div class="body" data-aos="fade-left">
      <ul>
        <li><b>{translate("edu.item5a")} (Québec – Ca)</b></li>
        <li><b>{translate("edu.degree")}</b>{translate("edu.item5b")}</li>
        <li><b>{translate("edu.study")}</b>{translate("edu.item5c")}</li>
        <li><b>{translate("edu.result")}</b>{translate("edu.item5d")}</li>
      </ul>
    </div>
  </div>

</div>
  );
};
export default Education;
