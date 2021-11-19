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
      position="Right"
      id="mounting"
      link="/mounting"
    >
      <p>
        Разнообразный и богатый опыт сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности требуют определения и уточнения форм развития.
      </p>
      <p>
        Задача организации, в особенности же дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации форм развития.Равным образом новая модель организационной деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.
      </p>
    </Section >
  );
}
