import React, { useState, useEffect } from "react";
import "../SCSS/main.scss";
import video from "../Video/morganpresentation.mp4";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const [playvideo, setplayvideo] = useState(true);
  const [translate, i18n] = useTranslation();
  const playorparsevideo = () => {
    const v = document.getElementById("firstvideo");
    if (playvideo === true) {
      v.pause();
      setplayvideo(false);
    } else {
      v.play();
      setplayvideo(true);
    }
  };

  //on iphone there is a bug that the video does not auto play, use useeffect to solve it
 /*
  useEffect(
    ()=>{
      const v = document.getElementById("firstvideo");
      v.play();
    },[]
  )
  */

  return (
    <div className="presentation" id="presentation">
      <div className="presentation_video_container">
        <video autoPlay loop muted playsInline width="100%" id="firstvideo">
          <source src={video} type="video/mp4" />
        </video>
        <div
          className="presentation_videocontenttop"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          {translate("presentation.item")}
          <div className='presentation_videocontenttop_subheader'>{translate("presentation.item0")}</div>
        </div>
      </div>

      <div className="presentation_whoiam">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          {translate("presentation.item1")}
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          {translate("presentation.item2")}
        </div>
        <br />
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="linear"
          style={{ marginLeft: "10vw" }}
        >
          <h4>{translate("presentation.item3")}</h4>
          <h4>{translate("presentation.item4")}</h4>
          <h4>{translate("presentation.item5")}</h4>
          <h4>{translate("presentation.item6")}</h4>
          <h4>{translate("presentation.item7")}</h4>
          <h4>{translate("presentation.item8")}</h4>
          <h4>{translate("presentation.item9")}</h4>
        </div>
        <br />
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          {translate("presentation.item10")}
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/morgan-percher-b78190170/"
          >
            <b>via LinkedIn!</b>
          </a>
        </div>

      </div>
    </div>
  );
};
export default Presentation;
