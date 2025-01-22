import style from "./transportation.module.css";
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
import { Slider } from "../../components/slider/slider";
import cn from "classnames";

const images = {
  avia: plane,
  truck: truck,
  train: train,
  multi: multi,
};

const titles = {
  truck: "Авто",
  avia: "Авиа",
  train: "Ж/Д",
  multi: "Мультимодальные",
};

const data = [aviaMap, truckMap, trainMap, multiMap];
const types = ["avia", "truck", "train", "multi"];

const SlideContent = ({ item }) => {
  return (
    <div className={style.sliderContainer}>
      <img alt="" src={item} className={style.sliderImg} />
    </div>
  );
};

export const Transportation = () => {
  const [selectedItem, setSelectedItem] = useState("avia");
  // avia || truck || train || multi

  const handleSelectTransportationType = (type) => {
    return () => setSelectedItem(type);
  };
  return (
    <Element name="transportation">
      <div className={style.container}>
        <div className={style.title}>
          <h1 className={style.titleBlack}>Все виды</h1>
          <h1 className={style.titleRed}>транспортировки</h1>
        </div>
        <div className={style.tabs}>
          {Object.keys(images).map((key) => {
            return (
              <div
                key={key}
                className={cn(style.plate, {
                  [style.plateActive]: selectedItem === key,
                })}
                onClick={handleSelectTransportationType(key)}
              >
                <img className={style.tabImg} src={images[key]} alt="" />
                <span className={style.tabText}>{titles[key]}</span>
              </div>
            );
          })}
        </div>
        <Slider
          isFullHeight={false}
          activeIndex={types.indexOf(selectedItem)}
          data={data}
          Content={SlideContent}
        />
      </div>
    </Element>
  );
};
