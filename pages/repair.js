import { repairHeader, repairRows } from "assets/tables-data.js";

import Head from "next/head";
import React from "react";
import Table from "components/Table/Table.js";
import { WINDOW_WIDTH } from "constants/constants.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";
import { useWindowSize } from "hooks/use-window-size.js";

const useStyles = makeStyles(styles);

export default function MountingPage() {
  const classes = useStyles();
  const windowSize = useWindowSize();


  return (
    <>
      <Head>
        <title>Ремонт кондиціонерів | Air Master</title>
        <meta name="description" content="Ремонт кондиціонерів в Києві" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <h1 className={ classes.sectionTitle }>Ремонт кондиціонерів у Києві: швидко, якісно, з гарантією</h1>
            <div className={ classes.sectionText }>
              <h4 className={ classes.sectionTitle }>Кліматичні системи – це складне обладнання, складаються з різних компонентів, кожен з яких може вийти з ладу в найнепридатніший момент. За наступними ознаками можна впізнати проблеми з кондиціонером:</h4>
              <ul className={ classes.list }>
                <li className={ classes.repairListItem }>Недостатній охолоджуючий/обігріваючий ефект може бути результатом низького рівня холодоагенту, забруднення фільтрів або крильчатки зовнішнього блоку, а також несправностей у температурному датчику або компресорному вузлі.</li>
                <li className={ classes.repairListItem }>Система не запускається. Зазвичай це пов'язано з проблемами у електричних компонентах, таких як зламаний пульт або висохлі батарейки, несправна плата управління або пошкоджений кабель.</li>
                <li className={ classes.repairListItem }>Кондиціонер автоматично вимикається через декілька хвилин після увімкнення. Ця поломка, ймовірно, пов'язана із несправністю плати управління, компресора чи вентилятора зовнішнього блоку.</li>
                <li className={ classes.repairListItem }>Вібрації свідчать про знос підшипників або пошкоджену крильчатку, а також можуть виникнути через налипання льоду.
                </li>
                <li className={ classes.repairListItem }>Гучний звук може бути наслідком погано закріплених деталей в блоку, розгерметизації магістралі або простого зношування обладнання.</li>
                <li className={ classes.repairListItem }>Витік конденсату часто пов'язаний із забиванням дренажної трубки або забрудненням фільтра випарника.</li>
              </ul>
              <p className={ classes.repairContainer }>Зауважте, що у 90% випадків ремонт кондиціонерів, особливо домашнього використання, стає необхідним через неправильну експлуатацію та відсутність своєчасного технічного обслуговування. Регулярне очищення кондиціонера може суттєво продовжити інтервал між ремонтами та зменшити ризики виникнення проблем.</p>
              <p className={ classes.repairContainer }>Не зволікайте, навіть якщо вам здається, що проблема незначна. Варто негайно звернутися до фахівця, оскільки навіть дрібна несправність з часом може призвести до складних та дорогих ремонтних робіт на кондиціонері.</p>
            </div>
            <div className={ classes.repairContainer }>
              <Table className={ classes.table } rows={ repairRows } header={ repairHeader } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
