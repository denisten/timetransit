import style from "./header.module.css";
import logo from "../../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import {
  headerItems,
  headerTitles,
  isMobile,
  linksMap,
  mainPageBlocks,
} from "../../constants";
import { HeaderServices } from "../../components/header-services";
import { MobileMenu } from "../../components/mobile-header/mobile-header";
import { useState } from "react";
import { useObserveScroll } from "../../hooks/use-observe-scroll";

const scrollOptions = {
  duration: 700,
  delay: 100,
  smooth: true,
  offset: -100,
};

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRootPage = location.pathname === "/";
  const [bgColor, setBgColor] = useState(
    "linear-gradient(90deg, #a62226, #000)",
  ); // Начальный фон

  const handleLinkClick = (name) => {
    const url = `/${linksMap[name] ?? ""}`;
    const needToNavigate = isRootPage !== mainPageBlocks.includes(name);
    if (needToNavigate) {
      return () => {
        console.log({ name, url, needToNavigate, isRootPage });
        navigate(url);
        setTimeout(() => {
          scroller.scrollTo(
            name,
            isRootPage ? scrollOptions : { ...scrollOptions },
          );
        }, 100);
      };
    } else {
      return () => {
        console.log({ name, url, needToNavigate, isRootPage });
        scroller.scrollTo(name, scrollOptions);
      };
    }
  };

  useObserveScroll(setBgColor);

  return (
    <div className={style.container} style={{ backgroundColor: bgColor }}>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <div className={style.linksContainer}>
          <img
            src={logo}
            alt=""
            className={style.logo}
            onClick={handleLinkClick("landing")}
          />
          {headerItems.map((item) => (
            <a onClick={handleLinkClick(item)}>{headerTitles[item]}</a>
          ))}
          {/*<HeaderServices />*/}
        </div>
      )}
    </div>
  );
};
