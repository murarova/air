import React from "react";
// core components
import Section from "components/Section/Section.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/main-page-sections/sectionStyles.js";

const useStyles = makeStyles(styles);

export default function Dismantling() {
  const classes = useStyles();

  return (
    <Section
      title="Демонтаж кондиціонерів."
      image="/img/dismantling.jpeg"
      position="left"
      id="dismantling"
      link="/dismantling"
    >
      <div className={ classes.sectionText }>
        <h3 className={ classes.mainTitle }>Демонтаж кондиціонерів провадиться із збереженням фреону.</h3>
        <h4 className={ classes.sectionTitle }>У вартість демонтажу входить: </h4>
        <ul className={ classes.list }>
          <li className={ classes.listItem }>Відключення комунікацій</li>
          <li className={ classes.listItem }>Демонтаж внутрішнього та зовнішнього блоку</li>
          <li className={ classes.listItem }>Демонтаж кронштейнів та монтажної пластини</li>
        </ul>
        <p>У вартість не входить послуги промальпінізму та автовишки.</p>
      </div>

    </Section >
  );
}
