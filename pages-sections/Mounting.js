import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Section from "components/Section/Section.js";

import styles from "styles/jss/nextjs-material-kit/pages/mainPageSections/sectionStyles.js";
const useStyles = makeStyles(styles);

export default function Mounting() {
  const classes = useStyles();
  return (
    <Section
      title="Монтаж кондиционеров."
      image="/img/mounting.jpeg"
      position="right"
      id="mounting"
      link="/mounting"
      color="rgba(0, 123, 255, .3)"
    >
      <div className={ classes.sectionText }>
        <h3  className={ classes.mainTitle }>Cтандартный монтаж кондиционеров включает  в себя: </h3>
        <h4 className={ classes.sectionTitle }>Работы: </h4>
        <ul className={ classes.list }>
          <li className={ classes.listItem }>Рекомендации по оптимальному расположению кондиционера</li>
          <li className={ classes.listItem }>Бурение одного отверстия под фреономагистраль.</li>
          <li className={ classes.listItem }>Монтаж  наружного и внутреннего блока кондиционера.</li>
          <li className={ classes.listItem }>Вакуумация и проверка системы на герметичность</li>
          <li className={ classes.listItem }>Запуск и пусконаладочные работы.</li>
        </ul>
        <h4 className={ classes.sectionTitle }>Материалы: </h4>
        <ul className={ classes.list }>
          <li className={ classes.listItem }>Фреономагистраль до 3 м.(стоимость каждого дополнительного метра указан в таблице)</li>
          <li className={ classes.listItem }>Дренажная труба до 3 м.</li>
          <li className={ classes.listItem }>Комплект кронштейнов К1 (порошковая покраска).</li>
          <li className={ classes.listItem }>Метизы (анкера, дюбеля, гайки, шайбы)</li>
        </ul>
        <span>Используем только профессиональное, современное оборудование и качественные сертифицированные материалы.</span><br />

        <p style={ { fontWeight: "700" } } className={ classes.final }>Даем гарантию на выполненные монтажные работы.</p>
      </div>
    </Section >
  );
}
