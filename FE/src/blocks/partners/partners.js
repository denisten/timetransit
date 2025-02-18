import React from "react";
import style from "./index.module.css";
import dissLogo from "../../images/dis-s.png";
import giftCompanyLogo from "../../images/gift-company.svg";
import hilonLogo from "../../images/hilon.png";
import profdstLogo from "../../images/profdst.svg";
import reshkeLogo from "../../images/reschke.svg";
import tmmashLogo from "../../images/tmmash.png";
import remdieselLogo from "../../images/remdiesel.png";
import avgustLogo from "../../images/avgust.svg";
import { Element } from "react-scroll";

const partnerLogos = [
    // dissLogo,
    giftCompanyLogo,
    hilonLogo,
    profdstLogo,
    reshkeLogo,
    tmmashLogo,
    remdieselLogo,
    avgustLogo,
];

export const Partners = () => {
    return (
        <Element name="partners" className={style.partnersSection}>
            <h1 className={style.title}>Наши партнёры</h1>

            {/* Десктопная версия – карточки в виде сетки */}
            <div className={style.logoGrid}>
                {partnerLogos.map((logo, index) => (
                    <div key={index} className={style.logoItem}>
                        <img src={logo} alt="Логотип партнёра" className={style.logo} />
                    </div>
                ))}
            </div>

            {/* Мобильная версия – автоскролл в одну строку */}
            <div className={style.mobileScroller}>
                <div className={style.scrollerTrack}>
                    {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                        <div key={index} className={style.logoItemMobile}>
                            <img
                                src={logo}
                                alt="Логотип партнёра"
                                className={style.logoMobile}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    );
};
