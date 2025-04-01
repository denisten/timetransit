import style from "./header.module.css";
import logo from "../../images/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import {
  headerItems,
  headerTitles,
  isMobile,
  linksMap,
  mainPageBlocks,
  scrollOptions,
} from "../../constants";
import { MobileMenu } from "../../components/mobile-header/mobile-header";
import { useEffect, useState } from "react";
import { useObserveScroll } from "../../hooks/use-observe-scroll";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRootPage = location.pathname === "/";
  // const [bgColor, setBgColor] = useState(
  //   "linear-gradient(90deg, #c3202b, #000)",
  // ); // Начальный фон

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

  // useObserveScroll(setBgColor);
  const handleScroll = (e) => {
    const header = document.getElementById("header-section");
    const scrollTop = window.scrollY;
    if (scrollTop >= 600) {
      header?.classList.add(style.sticky);
    } else {
      header?.classList.remove(style.sticky);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={style.container} id="header-section">
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
        </div>
      )}
    </div>
  );
};
