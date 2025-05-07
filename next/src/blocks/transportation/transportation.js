import style from "./transportation.module.css";
import { Element } from "react-scroll";
import { useState } from "react";
import { Slider } from "@/components/slider/slider";
import { Tabs } from "@/components/tabs";
import { tabsTitles } from "@/components/tabs/tabs";

const data = [
  "/images/aviaMap.png",
  "/images/multiMap.png",
  "/images/truckMap.png",
  "/images/trainMap.png",
];

const SlideContent = ({ item }) => {
  return (
    <div className={style.sliderContainer}>
      <img loading="lazy" alt="" src={item} className={style.sliderImg} />
    </div>
  );
};
const keys = tabsTitles.map((tab) => tab.id);
export const Transportation = () => {
  const [selectedItem, setSelectedItem] = useState("auto");
  // avia || truck || train || multi

  const handleSelectTransportationType = (type) => {
    setSelectedItem(type);
  };
  return (
    <Element
      name="transportation"
      data-section
      data-bgcolor="rgba(166, 34, 38, 0.9)"
    >
      <div className={style.container}>
        <div className={style.title}>
          <h1 className={style.titleBlack}>Все виды</h1>
          <h1 className={style.titleRed}>транспортировки</h1>
        </div>
        <Tabs
          selectedItem={selectedItem}
          onChange={handleSelectTransportationType}
        />
        <Slider
          isFullHeight={false}
          activeIndex={keys.indexOf(selectedItem)}
          data={data}
          Content={SlideContent}
        />
      </div>
    </Element>
  );
};
