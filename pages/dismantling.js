import { dismantlingHeader, dismantlingRows } from "assets/tables-data.js";

import Head from "next/head";
import React from "react";
import Table from "components/Table/Table.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function DismantlingPage() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Демонтаж кондиціонерів в Києві | Air Master</title>
        <meta name="description" content="Демонтаж кондиціонерів. У вартість демонтажу входить відключення комунікацій, демонтаж внутрішнього та зовнішнього блоку, демонтаж кронштейнів та монтажної пластини" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <h2>Демонтаж кондиціонерів.</h2>
            <div className={ classes.sectionText }>
              <p>Демонтаж кондиціонерів провадиться із збереженням фреону.</p>
              <p>У вартість демонтажу входить відключення комунікацій, демонтаж внутрішнього та зовнішнього блоку, демонтаж кронштейнів та монтажної пластини.</p>
              <p>У вартість не входить послуги промальпінізму та автовишки. </p>
              <p>При замовленні демонтажу понад 2 кондиціонери, надаються знижки.</p>
            </div>
            <div className={ classes.tableContainer }>
              <h4 className={ classes.sectionTitle }>Прайс-ліст</h4>
              <Table className={ classes.table } rows={ dismantlingRows } header={ dismantlingHeader } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
