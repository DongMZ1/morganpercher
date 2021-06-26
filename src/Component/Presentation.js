import React, { useState, useEffect } from "react";
import "../SCSS/main.scss";
import video from "../Video/morganpresentation.mp4";
import { useTranslation } from "react-i18next";
import VideoLooper from "react-video-looper";
import ReactPlayer from 'react-player'

const Presentation = ({innerWidth}) => {
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
        
        <VideoLooper
          source={video}
          playsInline
          id="firstvideo"
          muted
          objectFit
          height={innerWidth>1000 ? '28vw' : '52vw'}
          start={1.31}
          end={6.48}
          isDebugMode={false}
          autoPlay
        />
        
        
        <div
          className="presentation_videocontenttop"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          {translate("presentation.item")}
          <div className="presentation_videocontenttop_subheader">
            {translate("presentation.item0")}
          </div>
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
          style={{ marginLeft: "5vw" }}
        >
          <h5>{translate("presentation.item3")}</h5>
          <h5>{translate("presentation.item4")}</h5>
          <h5>{translate("presentation.item5")}</h5>
          <h5>{translate("presentation.item6")}</h5>
          <h5>{translate("presentation.item7")}</h5>
          <h5>{translate("presentation.item8")}</h5>
          <h5>{translate("presentation.item9")}</h5>
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
            <b>via LinkedIn !</b>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Presentation;
