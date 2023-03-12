import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Section from "components/Section/Section.js";

import styles from "styles/main-page-sections/sectionStyles.js";
const useStyles = makeStyles(styles);

export default function TrailInstallation() {
  const classes = useStyles();
  return (
    <Section
      title="Закладка трасс."
      image="/img/trail.jpeg"
      position="right"
      id="trail"
      link="/trail"
    >

      <h3 className={ classes.mainTitle }>Закладка фреономагистрали осуществляется двумя способами.</h3>
      <h4 className={ classes.trailSubTitle }>Закладка на этапе ремонта.</h4>
      <ol className={ classes.list }>
        <li className={ classes.listItem }>Закладка магистрали до 3м на этапе ремонта.</li>
        <li className={ classes.listItem }>Навеска блоков и подключение происходит по окончанию ремонта.</li>
        <li className={ classes.listItem }>Коммуникации скрыты в стене.</li>
      </ol>


      <h4 className={ classes.trailSubTitle }>Монтаж фреономагистрали по готовому ремонту.</h4>
      <ol className={ classes.list }>
        <li className={ classes.listItem }>Фреономагистраль монтируется  в пластиковом коробе.</li>
        <li className={ classes.listItem }>В этом варианте монтаж фреономагистрали и монтаж кондиціонерів выполняется за один приезд бригады.</li>
        <li className={ classes.listItem }>Коммуникации скрыты в коробе.</li>
      </ol>

      <p style={ { fontWeight: "700" } } className={ classes.final }>Используем только качественные, сертифицированные материалы.</p>
    </Section >
  );
}
