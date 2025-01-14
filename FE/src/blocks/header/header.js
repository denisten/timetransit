import style from "./header.module.css";
import { useNavigate } from "react-router-dom";
import burger from "../../images/burger.png";
import { scroller } from "react-scroll";
import {
  headerItems,
  headerTitles,
  isMobile,
  isRootPage,
} from "../../constants";
import { HeaderServices } from "../../components/header-services";
import { HeaderTypography } from "../../components/header-typography";
import { MobileMenu } from "../../components/mobile-header/mobile-header";

const scrollOptions = {
  duration: 700,
  delay: 100,
  smooth: true,
  offset: -150,
};

export const Header = () => {
  const navigate = useNavigate();
  const isRootPage = window.location.pathname === "/";

  const handleLinkClick = (name) => {
    if (isRootPage) {
      return () => scroller.scrollTo(name, scrollOptions);
    } else {
      return () => {
        navigate(`/`);
        setTimeout(() => {
          scroller.scrollTo(
            name,
            isRootPage ? scrollOptions : { ...scrollOptions },
          );
        }, 100);
      };
    }
  };

  const getPrice = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(
        "calculation",
        isRootPage ? scrollOptions : { ...scrollOptions, offset: 400 },
      );
    }, 100);
  };

  return (
    <div className={style.container}>
      {isMobile ? (
        <MobileMenu />
      ) : (
        // <div className={style.links}>
        //   <img
        //     className={style.burger}
        //     src={burger}
        //     alt=""
        //     // onClick={handleLinkClick("burger")}
        //     // onClick={handleScrollClick("burger")}
        //   />
        //   <button className={style.linkButton}>
        //     <HeaderTypography disableScale text="Узнать цену" />
        //   </button>
        // </div>
        <div className={style.links}>
          {headerItems.map((item) => (
            <HeaderTypography
              onClick={handleLinkClick(item)}
              text={headerTitles[item]}
            />
          ))}
          <HeaderServices />
          <button className={style.linkButton} onClick={getPrice}>
            <HeaderTypography disableScale text="Узнать цену" />
          </button>
        </div>
      )}
    </div>
  );
};
