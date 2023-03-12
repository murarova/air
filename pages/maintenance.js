import React from "react";
import Head from "next/head";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Table from "components/Table/Table.js";
import { maintenanceRows, maintenanceHeader } from "assets/tables-data.js";
import styles from "styles/pages/pages.js";


const useStyles = makeStyles(styles);


export default function MaintenancePage() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>ТО кондиціонерів | Air Master</title>
        <meta name="description" content="Технічне обслуговування кондиціонерів в Киеве. Перечень работ: Проверка работоспособности кондиционера в разных режимах. Замер температуры воздуха на выходе внутреннего блока. Осмотр кондиционера на наличие утечек. Замер давления в системе. Разборка корпуса внутреннего блока. Чистка корпуса, пластиковых элементов кондиционера. Чистка беличьего колеса. Чистка дренажной ванночки. Антибактериальная обработка испарителя специальной химией. Чистка испарителя с помощью парогенератора. Сборка кондиционера. Проверка работоспособности." />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <h1>Технічне обслуговування кондиціонерів.</h1>
            <div className={ classes.sectionText }>
              <h4>Технічне обслуговування кондиціонерів, включает следующий перечень работ: </h4>
              <ol className={ classes.list }>
                <li className={ classes.listItem }>Проверка работоспособности кондиционера в разных режимах.</li>
                <li className={ classes.listItem }>Замер температуры воздуха на выходе внутреннего блока.</li>
                <li className={ classes.listItem }>Осмотр кондиционера  на наличие утечек.</li>
                <li className={ classes.listItem }>Замер давления в системе.</li>
                <li className={ classes.listItem }>Разборка корпуса внутреннего блока.</li>
                <li className={ classes.listItem }>Чистка корпуса, пластиковых элементов кондиционера.</li>
                <li className={ classes.listItem }>Чистка беличьего колеса.</li>
                <li className={ classes.listItem }>Чистка дренажной ванночки.</li>
                <li className={ classes.listItem }>Антибактериальная обработка испарителя специальной химией.</li>
                <li className={ classes.listItem }>Чистка испарителя с помощью парогенератора.</li>
                <li className={ classes.listItem }>Сборка кондиционера.</li>
                <li className={ classes.listItem }>Проверка работоспособности.</li>
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
