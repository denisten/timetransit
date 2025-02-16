import React, { useState } from "react";
import style from "./index.module.css";
import { Button, Menu, MenuItem } from "@mui/material";

export const Info = () => {
  return (
    <div className={style.container}>
      <div className={style.buttonGroup}>
        {/* Телефоны */}
        <Button
          component="a"
          href="tel:+74959692990"
          className={`${style.contactButton} ${style.phone}`}
          startIcon={
            <span role="img" aria-label="Телефон">
              📞
            </span>
          }
          variant="contained"
        >
          +7 (495) 969-29-90
        </Button>
        <Button
          component="a"
          href="tel:+74959692991"
          className={`${style.contactButton} ${style.phone}`}
          startIcon={
            <span role="img" aria-label="Телефон">
              📞
            </span>
          }
          variant="contained"
        >
          +7 (495) 969-29-91
        </Button>
        <Button
          component="a"
          href="tel:+7495961761"
          className={`${style.contactButton} ${style.phone}`}
          startIcon={
            <span role="img" aria-label="Телефон">
              📞
            </span>
          }
          variant="contained"
        >
          +7 (495) 961-75-61
        </Button>

        {/* Почта */}
        <Button
          component="a"
          href="mailto:info@timetransit.com"
          className={`${style.contactButton} ${style.email}`}
          startIcon={
            <span role="img" aria-label="Почта">
              📧
            </span>
          }
          variant="contained"
        >
          info@timetransit.com
        </Button>

        {/* Сайт */}
        <Button
          component="a"
          href="/"
          className={`${style.contactButton} ${style.website}`}
          startIcon={
            <span role="img" aria-label="Сайт">
              🌐
            </span>
          }
          variant="contained"
        >
          timetransit.ru
        </Button>
      </div>
    </div>
  );
};
