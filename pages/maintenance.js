import { maintenanceHeader, maintenanceRows } from "assets/tables-data.js";

import Head from "next/head";
import React from "react";
import Table from "components/Table/Table.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);


export default function MaintenancePage() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>ТО кондиціонерів | Air Master</title>
        <meta name="description" content="Технічне обслуговування кондиціонерів у Києві. Перевірка працездатності кондиціонера у різних режимах. Чищення фільтрів внутрішнього блоку. Чищення наружного блоку парогенератором." />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <h1>Технічне обслуговування кондиціонерів.</h1>
            <div className={ classes.sectionText }>
              <h4>Технічне обслуговування кондиціонерів включає наступний перелік робіт: </h4>
              <ol className={ classes.list }>
                <li className={ classes.listItem }>Перевірка працездатності кондиціонера у різних режимах.</li>
                <li className={ classes.listItem }>Вимірювання температури повітря на виході внутрішнього блоку.</li>
                <li className={ classes.listItem }>Огляд кондиціонера на наявність витоків..</li>
                <li className={ classes.listItem }>Вимірювання тиску в системі.</li>
                <li className={ classes.listItem }>Розборка корпусу внутрішнього блоку.</li>
                <li className={ classes.listItem }>Чищення корпусу, пластикових елементів кондиціонера.</li>
                <li className={ classes.listItem }>Чищення біличого колеса.</li>
                <li className={ classes.listItem }>Чищення фільтрів внутрішнього блоку.</li>
                <li className={ classes.listItem }>Миття зовнішнього блоку керхером.</li>
                <li className={ classes.listItem }>Чищення дренажної ванни.</li>
                <li className={ classes.listItem }>Антибактеріальна обробка випарника спеціальною хімією.</li>
                <li className={ classes.listItem }>Миття внутрішнього блоку керхером.</li>
                <li className={ classes.listItem }>Складання кондиціонера.</li>
                <li className={ classes.listItem }>Перевірка працездатності.</li>
              </ol>
            </div>
            <div className={ classes.tableContainer }>
              <h4 className={ classes.sectionTitle }>Прайс-ліст</h4>
              <Table className={ classes.table } rows={ maintenanceRows } header={ maintenanceHeader } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
