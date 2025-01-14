import style from "./transportation.module.css";
import multi from "../../images/multi.png";
import truck from "../../images/truckLogo.png";
import plane from "../../images/plane.png";
import train from "../../images/trainLogo.png";
// import map from "./map.png";
import aviaMap from "../../images/aviaMap.png";
import multiMap from "../../images/multiMap.png";
import truckMap from "../../images/truckMap.png";
import trainMap from "../../images/trainMap.png";
import { Element } from "react-scroll";
import { useState } from "react";

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
  train: "Поезд",
  multi: "Мультимодальные",
};

export const Transportation = () => {
  const [selectedItem, setSelectedItem] = useState("avia");
  // avia || truck || train || multi

  const handleSelectTransportationType = (type) => {
    return () => setSelectedItem(type);
  };
  const content = Object.keys(images).map((key) => {
    return (
      <div
        key={key}
        className={
          selectedItem === key ? style.plateActive : style.plateDisable
        }
        onClick={handleSelectTransportationType(key)}
      >
        <img className={style.plane} src={images[key]} alt="" />
        <span className={style.text}>{titles[key]}</span>
      </div>
    );
  });
  return (
    <Element name="transportation">
      <div className={style.margin}>
        <div className={style.container}>
          <span className={style.titleBlack}>Все виды</span>
          <span className={style.titleRed}>транспортировки</span>
        </div>
        <div className={style.containerTrasportation}>
          {Object.keys(images).map((key) => {
            return (
              <div
                key={key}
                className={
                  selectedItem === key ? style.plateActive : style.plateDisable
                }
                onClick={handleSelectTransportationType(key)}
              >
                <img className={style.plane} src={images[key]} alt="" />
                <span className={style.text}>{titles[key]}</span>
              </div>
            );
          })}
        </div>
        <img className={style.map} src={imagesMap[selectedItem]} alt="" />
      </div>
    </Element>
  );
};
