import React from "react";
import "../SCSS/main.scss";
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div
      className="footer"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h7>
        morgan.percher@gmail.com
        <a href="https://www.linkedin.com/in/morgan-percher-b78190170/">
          <AiOutlineLinkedin style={{fontSize: '35px'}} />
        </a>
      </h7>
      <h7>514-231-3140</h7>
      <h7>Montréal</h7>
      <h7>©2021 par Morgan Percher</h7>
      <h7>design and build by Mingzhou Dong</h7>
    </div>
  );
};

export default Footer;
