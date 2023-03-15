import React from "react";
// core components
import Section from "components/Section/Section.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/main-page-sections/sectionStyles.js";

const useStyles = makeStyles(styles);

export default function Maintenance() {
  const classes = useStyles();
  return (
    <Section
      title="Технічне обслуговування."
      image="/img/maintaince.jpeg"
      position="left"
      id="maintaince"
      link="/maintenance"
    >
      <p>Для довговічного та ефективного використання кондиціонера слід пам'ятати про сервісне обслуговування кондиціонера.</p>
      <p>Його необхідно виконувати:</p>
      <ol className={ classes.list }>
        <li className={ classes.listItem }>Для квартир 2 рази на рік (перед зимою та на початку літа)</li>
        <li className={ classes.listItem }>Для офісів магазинів 4 рази на рік</li>
        <li className={ classes.listItem }>Для тих приміщень, серверних, комутаційних і т.д.</li>
      </ol>
      <strong>
        Регулярне чищення та технічне обслуговування кондиціонера значно продовжує термін служби кондиціонера, дозволяє запобігти дорогим поломкам і запобігає розмноженню шкідливих бактерій та грибків.
      </strong>

      <p className={ classes.final }>Ми пропонуємо весь перелік профілактичних робіт незалежно від моделі, типу та виробника обладнання. </p>
    </Section >
  );
}
