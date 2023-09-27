import React from "react";
// core components
import Section from "components/Section/Section.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/main-page-sections/sectionStyles.js";

const useStyles = makeStyles(styles);

export default function Repair() {
  const classes = useStyles();

  return (
    <Section
      title="Ремонт кондиціонерів."
      image="/img/repair.jpeg"
      position="right"
      id="repair"
      link="/repair"
    >
      <div className={ classes.sectionText }>
        <h3 className={ classes.mainTitle }>За наступними ознаками можна впізнати проблеми з кондиціонером:</h3>
        <ul className={ classes.list }>
          <li className={ classes.listItem }>Недостатній охолоджуючий/обігріваючий ефект може бути результатом низького рівня холодоагенту, забруднення фільтрів або крильчатки зовнішнього блоку, а також несправностей у температурному датчику або компресорному вузлі.</li>
          <li className={ classes.listItem }>Система не запускається. Зазвичай це пов'язано з проблемами у електричних компонентах, таких як зламаний пульт або висохлі батарейки, несправна плата управління або пошкоджений кабель.</li>
          <li className={ classes.listItem }>Кондиціонер автоматично вимикається через декілька хвилин після увімкнення. Ця поломка, ймовірно, пов'язана із несправністю плати управління, компресора чи вентилятора зовнішнього блоку.</li>
          <li className={ classes.listItem }>Вібрації свідчать про знос підшипників або пошкоджену крильчатку, а також можуть виникнути через налипання льоду.
          </li>
          <li className={ classes.listItem }>Гучний звук може бути наслідком погано закріплених деталей в блоку, розгерметизації магістралі або простого зношування обладнання.</li>
          <li className={ classes.listItem }>Витік конденсату часто пов'язаний із забиванням дренажної трубки або забрудненням фільтра випарника.</li>
        </ul>
        <p>Не зволікайте, навіть якщо вам здається, що проблема незначна. Варто негайно звернутися до фахівця, оскільки навіть дрібна несправність з часом може призвести до складних та дорогих ремонтних робіт на кондиціонері.</p>
      </div>

    </Section >
  );
}
