import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Section from "components/Section/Section.js";

import styles from "styles/jss/nextjs-material-kit/pages/mainPageSections/sectionStyles.js";

const useStyles = makeStyles(styles);

export default function Maintenance() {
  const classes = useStyles();
  return (
    <Section
      title="Техническое обслуживание."
      image="/img/maintaince.jpeg"
      position="Left"
      id="maintaince"
      link="/maintenance"
    >
      <p>
        Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации форм развития.
      </p>
      <p>
        Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
      </p>
      <p>
        Задача организации, в особенности же новая модель организационной деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Товарищи! дальнейшее развитие различных форм деятельности играет важную роль в формировании систем массового участия.
      </p>z
    </Section >
  );
}
