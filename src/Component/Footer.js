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
      <h6>
        morgan.percher@gmail.com
        <a href="https://www.linkedin.com/in/morgan-percher-b78190170/">
          <AiOutlineLinkedin style={{fontSize: '35px'}} />
        </a>
      </h6>
      <h6>514-231-3140</h6>
      <h6>Montréal</h6>
      <h6>©2021 par Morgan Percher</h6>
      <h6>design and build by Mingzhou Dong</h6>
    </div>
  );
};

export default Footer;
