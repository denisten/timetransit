import React from "react";
import style from "./index.module.css";
import { Element } from "react-scroll";

const partnerLogos = [
    "/images/gift-company.svg",
    "/images/hilon.png",
    "/images/profdst.svg",
    "/images/reschke.svg",
    "/images/tmmash.png",
    "/images/remdiesel.png",
    "/images/avgust.svg",
];

export const Partners = () => {
    return (
        <Element name="partners" className={style.partnersSection}>
            <h1 className={style.title}>Наши партнёры</h1>

            {/* Десктопная версия – карточки в виде сетки */}
            <div className={style.logoGrid}>
                {partnerLogos.map((logo, index) => (
                    <div key={index} className={style.logoItem}>
                        <img loading="lazy" src={logo} alt="Логотип партнёра" className={style.logo} />
                    </div>
                ))}
            </div>

            {/* Мобильная версия – автоскролл в одну строку */}
            <div className={style.mobileScroller}>
                <div className={style.scrollerTrack}>
                    {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                        <div key={index} className={style.logoItemMobile}>
                            <img
                                loading="lazy"
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
