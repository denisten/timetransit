import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import style from "./index.module.css";
import { Element } from "react-scroll";

const officeCoords = [55.655783, 37.498222];

export const OfficeMap = () => {
  const mapState = {
    center: officeCoords, // Координаты офиса
    zoom: 16, // Уровень масштабирования
  };
  return (
    <Element name="contacts" className={style.container}>
      <h1 className={style.title}>Контакты</h1>

      <div className={style.contentContainer}>
        {/* Яндекс.Карта */}
        {/*<div className={style.mapWrapper}>*/}

        <YMaps>
          <Map
            defaultState={mapState}
            className={style.map}
            options={{
              suppressMapOpenBlock: true, // Убирает ссылку "Открыть в Яндекс.Картах"
            }}
          >
            {/* Метка на карте */}
            <Placemark
              geometry={officeCoords}
              // properties={{
              //   balloonContent:
              //     "г. Москва, ул. Ленинский пр-т, д.113/1, оф. Е310",
              // }}
              options={{
                preset: "islands#redDotIcon", // Красная точка
              }}
            />
          </Map>
          {/*</div>*/}
        </YMaps>

        <div className={style.infoBlock}>
          {/*<p className={style.text}>*/}
          {/*  📍 <strong>Адрес:</strong> <br />*/}
          {/*  г. Москва, ул. Ленинский пр-т, д.113/1, оф. Е310*/}
          {/*</p>*/}
          <p className={style.text}>
            📞 <strong>Телефоны:</strong> <br />
            <a href="tel:+74959692990" className={style.link}>
              +7 (495) 969-29-90
            </a>
            <br />
            <a href="tel:+74959692991" className={style.link}>
              +7 (495) 969-29-91
            </a>
            <br />
            <a href="tel:+74959617561" className={style.link}>
              +7 (495) 961-75-61
            </a>
          </p>
          <p className={style.text}>
            📧 <strong>Почта:</strong> <br />
            <a href="mailto:info@timetransit.ru" className={style.link}>
              info@timetransit.ru
            </a>
          </p>
          <p className={style.text}>
            ⏰ <strong>Время работы:</strong> 9:00-18:00
          </p>
        </div>
      </div>
    </Element>
  );
};
