import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Section from "components/Section/Section.js";

import styles from "styles/jss/nextjs-material-kit/pages/mainPageSections/sectionStyles.js";
const useStyles = makeStyles(styles);

export default function Dismantling() {
  const classes = useStyles();

  return (
    <Section
      title="Демонтаж кондиционеров."
      image="/img/dismantling.jpeg"
      position="left"
      id="dismantling"
      link="/dismantling"
    >
      <div className={ classes.sectionText }>
        <h3 className={ classes.mainTitle }>Демонтаж кондиционеров производиться с сохранением фреона.</h3>
        <h4 className={ classes.sectionTitle }>В стоимость демонтажа входит: </h4>
        <ul className={ classes.list }>
          <li className={ classes.listItem }>Отключение коммуникаций</li>
          <li className={ classes.listItem }>Демонтаж внутреннего и наружного блока</li>
          <li className={ classes.listItem }>Демонтаж кронштейнов и монтажной пластины</li>
        </ul>
        <p>В стоимость не входит услуги промальпинизма и автовышки.</p>
        <p style={ { fontWeight: "700" } } className={ classes.final }>При заказе демонтажа более 2-х кондиционеров, предоставляются скидки.</p>
      </div>

    </Section >
  );
}
