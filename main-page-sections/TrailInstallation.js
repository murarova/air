import React from "react";
// core components
import Section from "components/Section/Section.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/main-page-sections/sectionStyles.js";

const useStyles = makeStyles(styles);

export default function TrailInstallation() {
  const classes = useStyles();
  return (
    <Section
      title="Закладка трас."
      image="/img/trail.jpeg"
      position="right"
      id="trail"
      link="/trail"
    >

      <h3 className={ classes.mainTitle }>Закладання фреономагістралі здійснюється двома способами.</h3>
      <h4 className={ classes.trailSubTitle }>Закладка на етапі ремонту.</h4>
      <ol className={ classes.list }>
        <li className={ classes.listItem }>Закладка магістралі до 3м на етапі ремонту.</li>
        <li className={ classes.listItem }>Кріплення блоків та підключення відбувається після закінчення ремонту.</li>
        <li className={ classes.listItem }>Комунікації приховані у стіні.</li>
      </ol>


      <h4 className={ classes.trailSubTitle }>Монтаж фреономагістралі у готовому ремонті.</h4>
      <ol className={ classes.list }>
        <li className={ classes.listItem }>Фреономагістраль монтується у пластиковому коробі.</li>
        <li className={ classes.listItem }>У цьому варіанті монтаж фреономагістралі та монтаж кондиціонерів виконується за один приїзд бригади.</li>
        <li className={ classes.listItem }>Комунікації приховані в коробці.</li>
      </ol>

      <p style={ { fontWeight: "700" } } className={ classes.final }>Використовуємо лише якісні, сертифіковані матеріали.</p>
    </Section >
  );
}
