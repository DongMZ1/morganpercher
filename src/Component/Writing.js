import React from "react";
import "../SCSS/main.scss";
import { useTranslation } from "react-i18next";
import { TiMicrophoneOutline } from "react-icons/ti";
import { GrArticle } from "react-icons/gr";
import { AiOutlineCamera } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
//images
import p1 from "../writing/p1.webp";
import p2 from "../writing/p2.webp";
import p3 from "../writing/p3.webp";
import p4 from "../writing/p4.webp";
import p5 from "../writing/p5.webp";
import p6 from "../writing/p6.webp";
import p7 from "../writing/p7.webp";
import p8 from "../writing/p8.webp";
import p9 from "../writing/p9.webp";
import p10 from "../writing/p10.webp";
import p11 from "../writing/p11.webp";
import p12 from "../writing/p12.webp";

//file links
import pdf1 from "../writing/pdf1.pdf";
import pdf2 from "../writing/pdf2.pdf";
import pdf3 from "../writing/pdf3.pdf";
import pdf4 from "../writing/pdf4.pdf";
import pdf5 from "../writing/pdf5.pdf";

import { FiLink } from "react-icons/fi";
const WritingOrgan = () => {
  const [translate, i18n] = useTranslation();

  return (
    <div className="writingorgan" id="writingorgan">
      <div className="header" data-aos="fade-down-right">
        {translate("writing.title")}
      </div>
      <div className="headermiddle" />
      {/**first report ------------------------------------------------------------- */}

      <div className="regularcol" data-aos="fade-down" data-aos-offset="100">
        <div className="regularcol_reportheader">
          <a href={pdf1} className="link" style={{ textDecoration: "none" }}>
            {translate("writing.item1a")} <FiLink />
          </a>
        </div>
        <div className="reportcontainer">
          <a href={pdf1} className="link" style={{ textDecoration: "none" }}>
            <img src={p1} />
          </a>
          <div
            style={{
              paddingTop: "4vw",
              paddingRight: "2vw",
              paddingLeft: "2vw",
            }}
          >
            <p>
              <b>{translate("writing.company")}</b>
              {translate("writing.item1b")}
            </p>
            <p>
              <b>{translate("writing.file")}</b>
              {translate("writing.item1c")}
            </p>
            <p>
              <b>Mission: </b>
              {translate("writing.item1d")}
            </p>
            <div>
              <TiMicrophoneOutline
                style={{ paddingLeft: "10px", fontSize: "50px" }}
              />
              <span style={{ fontSize: "22px" }}>
                {translate("writing.m2")}
              </span>
            </div>
            <div>
              <GrArticle style={{ paddingLeft: "10px", fontSize: "50px" }} />
              <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
                {translate("writing.m1")}
              </span>
            </div>
            <div>
              <AiOutlineCamera
                style={{ paddingLeft: "10px", fontSize: "50px" }}
              />
              <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
                {translate("writing.m4")}
              </span>
            </div>
            <div>
              <BsSearch style={{ paddingLeft: "10px", fontSize: "50px" }} />
              <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
                {translate("writing.m3")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/**end of first report-------------------------------------------------------- */}
      <div className="writingorgan_grid_container">
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf2} className="link" style={{ textDecoration: "none" }}>
              {translate("writing.item2a")} <FiLink />
            </a>
          </div>
          <a href={pdf2} className="link" style={{ textDecoration: "none" }}>
            <img src={p2} />
          </a>

          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item2b")}
          </p>
          <p>
            <b>{translate("writing.public")}</b>
            {translate("writing.item2c")}
          </p>
          <p>
            <b>Mission: </b>
          </p>
          <div>
            <TiMicrophoneOutline
              style={{ paddingLeft: "10px", fontSize: "50px" }}
            />
            <span style={{ fontSize: "22px" }}>{translate("writing.m2")}</span>
          </div>
          <div>
            <GrArticle style={{ paddingLeft: "10px", fontSize: "50px" }} />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m1")}
            </span>
          </div>
          <div>
            <AiOutlineCamera
              style={{ paddingLeft: "10px", fontSize: "50px" }}
            />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m4")}
            </span>
          </div>
          <div>
            <BsSearch style={{ paddingLeft: "10px", fontSize: "50px" }} />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m3")}
            </span>
          </div>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf3} className="link" style={{ textDecoration: "none" }}>
              {translate("writing.item3a")} <FiLink />
            </a>
          </div>
          <a href={pdf3} className="link" style={{ textDecoration: "none" }}>
            <img src={p3} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item3b")}
          </p>
          <p>
            <b>{translate("writing.public")}</b>
            {translate("writing.item3c")}
          </p>
          <p>
            <b>Mission: </b>
          </p>
          <div>
            <TiMicrophoneOutline
              style={{ paddingLeft: "10px", fontSize: "50px" }}
            />
            <span style={{ fontSize: "22px" }}>{translate("writing.m2")}</span>
          </div>
          <div>
            <GrArticle style={{ paddingLeft: "10px", fontSize: "50px" }} />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m1")}
            </span>
          </div>
          <div>
            <AiOutlineCamera
              style={{ paddingLeft: "10px", fontSize: "50px" }}
            />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m4")}
            </span>
          </div>
          <div>
            <BsSearch style={{ paddingLeft: "10px", fontSize: "50px" }} />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m3")}
            </span>
          </div>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a className="link" href={pdf4} style={{ textDecoration: "none" }}>
              {translate("writing.item4a")} <FiLink />
            </a>
          </div>
          <a className="link" href={pdf4} style={{ textDecoration: "none" }}>
            <img src={p4} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item4b")}
          </p>
          <p>
            <b>{translate("writing.public")}</b>
            {translate("writing.item4c")}
          </p>
          <p>
            <b>Mission: </b>
          </p>
          <div>
            <TiMicrophoneOutline
              style={{ paddingLeft: "10px", fontSize: "50px" }}
            />
            <span style={{ fontSize: "22px" }}>{translate("writing.m2")}</span>
          </div>
          <div>
            <GrArticle style={{ paddingLeft: "10px", fontSize: "50px" }} />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m1")}
            </span>
          </div>
          <div>
            <AiOutlineCamera
              style={{ paddingLeft: "10px", fontSize: "50px" }}
            />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m4")}
            </span>
          </div>
          <div>
            <BsSearch style={{ paddingLeft: "10px", fontSize: "50px" }} />
            <span style={{ fontSize: "22px", paddingLeft: "5px" }}>
              {translate("writing.m3")}
            </span>
          </div>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a
              href="https://www.dreux-agglomeration.fr/actualite/le-site-de-mezieres-ecluzelles-est-en-parfaite-sante/"
              className="link"
              style={{ textDecoration: "none" }}
            >
              {translate("writing.item5a")} <FiLink />
            </a>
          </div>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/le-site-de-mezieres-ecluzelles-est-en-parfaite-sante/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <img src={p5} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item5b")}
          </p>
          <p>
            <b>{translate("writing.project")}</b>
            {translate("writing.item5c")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("writing.item5d")}
          </p>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/le-site-de-mezieres-ecluzelles-est-en-parfaite-sante/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <p>{translate("writing.article")}</p>
          </a>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a
              href="https://www.dreux-agglomeration.fr/actualite/une-exposition-etonnante-au-domaine-de-madame-de-pompadour/"
              className="link"
              style={{ textDecoration: "none" }}
            >
              {translate("writing.item6a")} <FiLink />
            </a>
          </div>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/une-exposition-etonnante-au-domaine-de-madame-de-pompadour/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <img src={p6} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item6b")}
          </p>
          <p>
            <b>{translate("writing.project")}</b>
            {translate("writing.item6c")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("writing.item6d")}
          </p>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/une-exposition-etonnante-au-domaine-de-madame-de-pompadour/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <p>{translate("writing.article")}</p>
          </a>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a href="https://www.dreux-agglomeration.fr/actualite/la-nouvelle-gare-routiere-de-dreux-inauguree/" className="link" style={{ textDecoration: "none" }}>
              {translate("writing.item7a")} <FiLink />
            </a>
          </div>
          <a href="https://www.dreux-agglomeration.fr/actualite/la-nouvelle-gare-routiere-de-dreux-inauguree/" className="link" style={{ textDecoration: "none" }}>
            <img src={p7} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item7b")}
          </p>
          <p>
            <b>{translate("writing.project")}</b>
            {translate("writing.item7c")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("writing.item7d")}
          </p>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/la-nouvelle-gare-routiere-de-dreux-inauguree/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <p>{translate("writing.article")}</p>
          </a>
        </div>
        {/**----------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a href="https://www.dreux-agglomeration.fr/actualite/fete-des-plantes-marville-les-bois/" className="link" style={{ textDecoration: "none" }}>
              {translate("writing.item8a")} <FiLink />
            </a>
          </div>
          <a href="https://www.dreux-agglomeration.fr/actualite/fete-des-plantes-marville-les-bois/" className="link" style={{ textDecoration: "none" }}>
            <img src={p8} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item8b")}
          </p>
          <p>
            <b>{translate("writing.project")}</b>
            {translate("writing.item8c")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("writing.item8d")}
          </p>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/fete-des-plantes-marville-les-bois/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <p>{translate("writing.article")}</p>
          </a>
        </div>
        {/**------------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a href="https://www.dreux-agglomeration.fr/actualite/laure-poirier-a-nouveau-recompensee/" className="link" style={{ textDecoration: "none" }}>
              {translate("writing.item9a")} <FiLink />
            </a>
          </div>
          <a href="https://www.dreux-agglomeration.fr/actualite/laure-poirier-a-nouveau-recompensee/" className="link" style={{ textDecoration: "none" }}>
            <img src={p9} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item9b")}
          </p>
          <p>
            <b>{translate("writing.project")}</b>
            {translate("writing.item9c")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("writing.item9d")}
          </p>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/laure-poirier-a-nouveau-recompensee/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <p>{translate("writing.article")}</p>
          </a>
        </div>
        {/**------------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a href="https://www.dreux-agglomeration.fr/actualite/theatre-kery-james/" className="link" style={{ textDecoration: "none" }}>
              {translate("writing.item10a")} <FiLink />
            </a>
          </div>
          <a href="https://www.dreux-agglomeration.fr/actualite/theatre-kery-james/" className="link" style={{ textDecoration: "none" }}>
            <img src={p10} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item10b")}
          </p>
          <p>
            <b>{translate("writing.project")}</b>
            {translate("writing.item10c")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("writing.item10d")}
          </p>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/theatre-kery-james/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <p>{translate("writing.article")}</p>
          </a>
        </div>
        {/**------------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a href="https://www.dreux-agglomeration.fr/actualite/un-club-de-lecture-a-la-croisee-des-genres/" className="link" style={{ textDecoration: "none" }}>
              {translate("writing.item11a")} <FiLink />
            </a>
          </div>
          <a href="https://www.dreux-agglomeration.fr/actualite/un-club-de-lecture-a-la-croisee-des-genres/" className="link" style={{ textDecoration: "none" }}>
            <img src={p11} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item11b")}
          </p>
          <p>
            <b>{translate("writing.project")}</b>
            {translate("writing.item11c")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("writing.item11d")}
          </p>
          <a
            href="https://www.dreux-agglomeration.fr/actualite/un-club-de-lecture-a-la-croisee-des-genres/"
            className="link"
            style={{ textDecoration: "none" }}
          >
            <p>{translate("writing.article")}</p>
          </a>
        </div>
        {/**------------------------------------------------------------------------------- */}
        <div className="regularcol" data-aos="fade-left" data-aos-offset="100">
          <div className="regularcol_header">
            <a href={pdf5} className="link" style={{ textDecoration: "none" }}>
              {translate("writing.item12a")} <FiLink />
            </a>
          </div>
          <a href={pdf5} className="link" style={{ textDecoration: "none" }}>
            <img src={p12} />
          </a>
          <p>
            <b>{translate("writing.company")}</b>
            {translate("writing.item12b")}
          </p>
          <p>
            <b>Mission: </b>
            {translate("writing.item12c")}
          </p>
        </div>
        {/**------------------------------------------------------------------------------- */}
      </div>
      {/**end of container ---------------------------------------------------------- */}
    </div>
  );
};

export default WritingOrgan;
