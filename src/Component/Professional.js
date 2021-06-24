import React from 'react'
import '../SCSS/main.scss'
import { useTranslation } from "react-i18next";
const Professtional = () =>{
    const [translate, i18n] = useTranslation();
    return <div className='education' id='prefessional'>

<div className="entry">
    <div class="body" data-aos="fade-left">
     <h1>{translate("edu.title")}</h1>
    </div>
  </div>

  <div className="entry">
    <div className="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item1a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item1b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item1c")}</h5>
    </div>
    <div className="body">
      <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item1d")}</p>
      <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item1e")}</p>
      <p data-aos="fade-left"><b>💭 Communication : </b>{translate("exper.item1f")}</p>
    </div>
  </div>

 <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item2a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item2b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item2c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item2d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item2e")}</h5>
    </div>
    <div class="body">
      <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item2f")}</p>
      <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item2g")}</p>
      <p data-aos="fade-left"><b>💭 Communication : </b>{translate("exper.item2h")}</p>
      <p data-aos="fade-left"><b>{translate("exper.creation")}</b>{translate("exper.item2i")}</p>
      <p data-aos="fade-left"><b>{translate("exper.pressrelation")}</b>{translate("exper.item2j")}</p>
      <p data-aos="fade-left"><b>{translate("exper.web")}</b>{translate("exper.item2k")}</p>
      <p data-aos="fade-left"><b>{translate("exper.ecology")}</b>{translate("exper.item2l")}</p>
      <p data-aos="fade-left"><b>{translate("exper.eventandex")}</b>{translate("exper.item2m")}</p>
      <p data-aos="fade-left"><b>{translate("exper.sideproject1")}</b>{translate("exper.item2n")}</p>
      <p data-aos="fade-left"><b>{translate("exper.sideproject2")}</b>{translate("exper.item2o")}</p>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item3a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item3b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item3c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item3d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item3e")}</h5>
    </div>
    <div class="body">
      <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item3f")}</p>
      <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item3g")}</p>
      <p data-aos="fade-left"><b>{translate("exper.event")}</b>{translate("exper.item3h")}</p>
      <p data-aos="fade-left"><b>💭 Communication : </b>{translate("exper.item3i")}</p>
      <p data-aos="fade-left"><b>{translate("exper.creation")}</b>{translate("exper.item3j")}</p>
    </div>
  </div>


  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item4a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item4b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item4c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item4d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item4e")}</h5>
    </div>
    <div class="body">
        <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item4f")}</p>
        <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item4g")}</p>
        <p data-aos="fade-left"><b>{translate("exper.pressrelation")}</b>{translate("exper.item4h")}</p>
        <p data-aos="fade-left"><b>{translate("exper.creation")}</b>{translate("exper.item4i")}</p>
        <p data-aos="fade-left"><b>{translate("exper.web")}</b>{translate("exper.item4j")}</p>
        <p data-aos="fade-left"><b>{translate("exper.eventandex")}</b>{translate("exper.item4k")}</p>
        <p data-aos="fade-left"><b>{translate("exper.crisis")}</b>{translate("exper.item4l")}</p>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item5a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item5b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item5c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item5d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item5e")}</h5>
    </div>
    <div class="body">
        <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item5f")}</p>
        <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item5g")}</p>
        <p data-aos="fade-left"><b>{translate("exper.creation")}</b>{translate("exper.item5h")}</p>
        <p data-aos="fade-left"><b>{translate("exper.journal")}</b>{translate("exper.item5i")}</p>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item6a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item6b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item6c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item6d")}</h5>
    </div>
    <div class="body">
        <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item6e")}</p>
        <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item6f")}</p>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item7a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item7b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item7c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item7d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item7e")}</h5>
    </div>
    <div class="body">
        <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item7f")}</p>
        <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item7g")}</p>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item8a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item8b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item8c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item8d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item8e")}</h5>
    </div>
    <div class="body">
        <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item8f")}</p>
        <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item8g")}</p>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item9a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item9b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item9c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item9d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item9e")}</h5>
    </div>
    <div class="body">
        <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item9f")}</p>
        <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item9g")}</p>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item10a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item10b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item10c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item10d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item10e")}</h5>
    </div>
    <div class="body">
        <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item10f")}</p>
        <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item10g")}</p>
    </div>
  </div>

  <div class="entry">
    <div class="title">
      <h5 data-aos="fade-right"><b>{translate("exper.job")}</b>{translate("exper.item11a")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.company")}</b>{translate("exper.item11b")}</h5>
      <h5 data-aos="fade-right"><b>Dates : </b>{translate("exper.item11c")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.duration")}</b>{translate("exper.item11d")}</h5>
      <h5 data-aos="fade-right"><b>{translate("exper.location")}</b>{translate("exper.item11e")}</h5>
    </div>
    <div class="body">
        <p data-aos="fade-left"><b>{translate("exper.description")}</b>{translate("exper.item11f")}</p>
        <p data-aos="fade-left"><b>{translate("exper.function")}</b>{translate("exper.item11g")}</p>
    </div>
  </div>

</div>
          
}
export default Professtional;