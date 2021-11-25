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
      <p>
        Разнообразный и богатый опыт сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности требуют определения и уточнения форм развития.
      </p>
      <p>
        Задача организации, в особенности же дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации форм развития.
      </p>
    </Section >
  );
}
