import React, { useState } from "react";
import "../SCSS/main.scss";
import video from "../Video/tester.mp4";

const Presentation = () => {
  const [playvideo, setplayvideo] = useState(true);
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

  return (
    <div className="presentation" id="presentation">
      <div onClick={playorparsevideo} className="presentation_video_container">
        <video autoPlay loop width="100%" id="firstvideo">
          <source src={video} type="video/mp4" />
        </video>
        <div
          className="presentation_videocontenttop"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          À PROPOS Responsable de communication passionné par la protection de
          la nature, je suis très enthousiaste, réactif et impliqué. Fort de 6
          années d’expériences dont 2 années spécialisées dans les secteurs
          touristiques et culturels, j'ai acquis des compétences en stratégie
          ainsi qu'une grande polyvalence sur le terrain. Ainsi, je peux vous
          accompagner dans le développement de l’image de votre entreprise et de
          ses activités. Vous souhaitez échanger sur différents sujets liés à la
          communication ou au développement durable, n'hésitez pas à me
          contacter ! En attendant, je vous invite à consulter mes réalisations
          en parcourant mon site et à en apprendre plus sur mes expériences et
          ma formation, via LinkedIn !
        </div>
      </div>
    </div>
  );
};
export default Presentation;
