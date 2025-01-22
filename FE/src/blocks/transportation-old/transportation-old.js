import style from "./transportation-old.module.css";
import multi from "../../images/multi.png";
import truck from "../../images/truckLogo.png";
import plane from "../../images/plane.png";
import train from "../../images/trainLogo.png";
import aviaMap from "../../images/aviaMap.png";
import multiMap from "../../images/multiMap.png";
import truckMap from "../../images/truckMap.png";
import trainMap from "../../images/trainMap.png";
import { Element } from "react-scroll";
import { useState } from "react";
import {Slider} from "../../components/slider/slider";

const images = {
  avia: plane,
  truck: truck,
  train: train,
  multi: multi,
};

const imagesMap = {
  avia: aviaMap,
  truck: truckMap,
  train: trainMap,
  multi: multiMap,
};

const titles = {
  truck: "Авто",
  avia: "Авиа",
  train: "Ж/Д",
  multi: "Мультимодальные",
};

const data = [plane, truck, train, multi];

const SlideContent = ({item}) => {
  const { src, text } = item;
  return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <video
            src={src}
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className={style.overlay}>
          <div className={style.container}>
            <div className={style.contentContainer}>
              <div className={style.logoBlock}>
                <img className={style.logo} src={logo} alt="logo" />
                <div className={style.textBlock}>
                  <h1 className={style.time}>TIME</h1>
                  <h2 className={style.transit}>transit</h2>
                </div>
              </div>
              <div className={style.textDownLogo}>{text}</div>
            </div>
          </div>
        </div>
      </div>)
}

export const TransportationOld = () => {
  const [selectedItem, setSelectedItem] = useState("avia");
  // avia || truck || train || multi

  const handleSelectTransportationType = (type) => {
    return () => setSelectedItem(type);
  };
  return (
    <Element name="transportation">
      <div className={style.margin}>
        <div className={style.container}>
          <h1 className={style.titleBlack}>Все виды</h1>
          <h1 className={style.titleRed}>транспортировки</h1>
        </div>
        <div className={style.containerTrasportation}>
          <Slider data={data} Content={}/>
          {/*{Object.keys(images).map((key) => {*/}
          {/*  return (*/}
          {/*    <div*/}
          {/*      key={key}*/}
          {/*      className={*/}
          {/*        selectedItem === key ? style.plateActive : style.plateDisable*/}
          {/*      }*/}
          {/*      onClick={handleSelectTransportationType(key)}*/}
          {/*    >*/}
          {/*      <img className={style.plane} src={images[key]} alt="" />*/}
          {/*      <span className={style.text}>{titles[key]}</span>*/}
          {/*    </div>*/}
          {/*  );*/}
          {/*})}*/}
        </div>
        <img className={style.map} src={imagesMap[selectedItem]} alt="" />
      </div>
    </Element>
  );
};
