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
              properties={{
                balloonContent:
                  "г. Москва, ул. Ленинский пр-т, д.113/1, оф. Е310",
              }}
              options={{
                preset: "islands#redDotIcon", // Красная точка
              }}
            />
          </Map>
        </YMaps>

        <div className={style.infoBlock}>
          <p className={style.text}>
            г. Москва, ул. Ленинский пр-т, д.113/1, оф. Е310
          </p>
          <p className={style.text}>
            Телефоны:
            <br />
            +7 (495) 969-29-90
            <br />
            +7 (495) 969-29-91
            <br />
            +7 (495) 961-75-61
          </p>
          <p className={style.text}>
            Почта:
            <br />
            <a href="mailto:info@timetransit.com" className={style.link}>
              info@timetransit.com
            </a>
          </p>
          <p className={style.text}>Время работы: 9:00-18:00</p>
        </div>
      </div>
    </Element>
  );
};
