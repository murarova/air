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
        <title>Демонтаж кондиционеров в Киеве | Air Master</title>
        <meta name="description" content="Демонтаж кондиционеров в Киеве. В стоимость демонтажа входит отключение коммуникаций, демонтаж внутреннего и наружного блока, демонтаж кронштейнов и монтажной пластины" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <h2>Демонтаж кондиционеров.</h2>
            <div className={ classes.sectionText }>
              <p>Демонтаж кондиционеров производиться с сохранением фреона.</p>
              <p>В стоимость демонтажа входит отключение коммуникаций, демонтаж внутреннего и наружного блока, демонтаж кронштейнов и монтажной пластины.</p>
              <p>В стоимость не входит услуги промальпинизма и автовышки. </p>
              <p>При заказе демонтажа более 2-х кондиционеров, предоставляются скидки.</p>
            </div>
            <div className={ classes.tableContainer }>
              <h4 className={ classes.sectionTitle }>Прайс-лист</h4>
              <Table className={ classes.table } rows={ dismantlingRows } header={ dismantlingHeader } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
