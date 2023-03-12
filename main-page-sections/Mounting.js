import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Section from "components/Section/Section.js";

import styles from "styles/main-page-sections/sectionStyles.js";
const useStyles = makeStyles(styles);

export default function Mounting() {
  const classes = useStyles();
  return (
    <Section
      title="Монтаж кондиціонерів."
      image="/img/mounting.jpeg"
      position="right"
      id="mounting"
      link="/mounting"
      color="rgba(0, 123, 255, .3)"
    >
      <div className={ classes.sectionText }>
        <h3  className={ classes.mainTitle }>Cтандартный монтаж кондиціонерів включает  в себя: </h3>
        <h4 className={ classes.sectionTitle }>Роботи: </h4>
        <ul className={ classes.list }>
          <li className={ classes.listItem }>Рекомендації щодо оптимального розташування кондиціонера.</li>
          <li className={ classes.listItem }>Буріння одного отвору під фреономагістраль.</li>
          <li className={ classes.listItem }>Монтаж зовнішнього та внутрішнього блоку кондиціонера.</li>
          <li className={ classes.listItem }>Вакуумація та перевірка системи на герметичність.</li>
          <li className={ classes.listItem }>Запуск и пусконаладочные работы.</li>
        </ul>
        <h4 className={ classes.sectionTitle }>Матеріали: </h4>
        <ul className={ classes.list }>
          <li className={ classes.listItem }>Фреономагістраль до 3 м (вартість кожного додаткового метра вказаний у таблиці).</li>
          <li className={ classes.listItem }>Дренажна труба до 3м.</li>
          <li className={ classes.listItem }>Комплект кронштейнів К1 (порошкове фарбування).</li>
          <li className={ classes.listItem }>Метизы (анкеры, дюбели, гайки, шайбы).</li>
        </ul>
        <span>Використовуємо лише професійне, сучасне обладнання та якісні сертифіковані матеріали.</span><br />

        <p style={ { fontWeight: "700" } } className={ classes.final }>Даємо гарантію на виконані монтажні роботи.</p>
      </div>
    </Section >
  );
}
