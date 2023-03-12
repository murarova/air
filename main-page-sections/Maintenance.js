import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Section from "components/Section/Section.js";

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
      <p>Для долговечного и эффективного использования кондиционера нужно помнить про сервисное обслуживание кондиционера.</p>
      <p>Его необходимо выполнять:</p>
      <ol className={ classes.list }>
        <li className={ classes.listItem }>Для квартир 2 раза в год (перед зимой и в начале лета)</li>
        <li className={ classes.listItem }>Для офисов магазинов 4 раза в год</li>
        <li className={ classes.listItem }>Для тех помещений, серверных, коммутационных и т. д. ежемесячно</li>
      </ol>
      <strong>
        Регулярная чистка и техническое обслуживание кондиционера значительно продлевает срок службы кондиционера, позволяет предотвратить дорогостоящие поломки и предотвращает размножение вредоносных бактерий и грибков.
      </strong>

      <p className={ classes.final }>Мы предлагаем весь перечень профилактических работ независимо от модели, типа и производителя оборудования. </p>
    </Section >
  );
}
