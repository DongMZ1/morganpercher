import React from "react";
import "../SCSS/main.scss";
import { useTranslation } from "react-i18next";
//images
import p1 from "../event/p1.webp";
import p2 from "../event/p2.webp";
import p3 from "../event/p3.webp";
import eventvideo from '../event/event.mp4'
import coverpage from '../event/cover.png'

import { FiLink } from "react-icons/fi";
const Event = () => {
  const [translate, i18n] = useTranslation();
  return (
    <div className="event" id="event">
      <div className="header" data-aos="fade-down-right">
        {translate("event.title")}
      </div>
      <div className="headermiddle" />
      {/**-------------------------------------------------------- */}
      <div className="event_grid_container">
        {/**----------------------------------------------------------------------------- */}
        <div
          className="regularcol"
          data-aos="fade-zoom-in"
          data-aos-offset="100"
        >
          <div className="regularcol_header">{translate("event.item1a")}</div>
          <img src={p1} />
          <p>
            <b>{translate("event.company")}</b>
            {translate("event.item1b")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("event.item1c")}
          </p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div
          className="regularcol"
          data-aos="fade-zoom-in"
          data-aos-offset="100"
        >
          <div className="regularcol_header">{translate("event.item2a")}</div>
          <img src={p2} />
          <p>
            <b>{translate("event.company")}</b>
            {translate("event.item2b")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("event.item2c")}
          </p>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div
          className="regularcol"
          data-aos="fade-zoom-in"
          data-aos-offset="100"
        >
          <div className="regularcol_header">{translate("event.item3a")}</div>
          <img src={p3} />
          <p>
            <b>{translate("event.company")}</b>
            {translate("event.item3b")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("event.item3c")}
          </p>
        </div>
        {/**------------------------------------------------------------------------------- */}
        <div
          className="regularcol"
          data-aos="fade-zoom-in"
          data-aos-offset="100"
        >
          <div className="regularcol_header">{translate("event.item4a")}</div>
          <video width='100%' controls poster={coverpage}>
  <source src={eventvideo} type="video/mp4" />
            </video>
          <p>
            <b>Missions: </b>
            {translate("event.item4b")}
          </p>
          <p>
            <b>{translate("event.item4c")}</b>
            {translate("event.item4d")}
          </p>
          <p><b>{translate("event.item4e")}</b></p>
          <div style={{paddingLeft:'5vw'}}>
             <p>{translate("event.item4f")}</p>
             <p>{translate("event.item4g")}</p>
             <p>{translate("event.item4h")}</p>
             <p>{translate("event.item4i")}</p>
          </div>
        </div>
        {/**------------------------------------------------------------------------------- */}
      </div>
      {/**end of container ---------------------------------------------------------- */}
    </div>
  );
};

export default Event;
