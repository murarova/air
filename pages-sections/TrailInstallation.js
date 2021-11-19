import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Section from "components/Section/Section.js";

import styles from "styles/jss/nextjs-material-kit/pages/mainPageSections/sectionStyles.js";
const useStyles = makeStyles(styles);

export default function TrailInstallation() {
  const classes = useStyles();
  return (
    <Section
      title="Закладка трасс."
      image="/img/trail.jpeg"
      position="Right"
      id="trail"
      link="/trail"
    >
      <p>
        Разнообразный и богатый опыт сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности требуют определения и уточнения форм развития.
      </p>
      <p>
        Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки соответствующий условий активизации. Равным образом новая модель организационной деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации.
      </p>
    </Section >
  );
}
