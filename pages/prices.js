import { dismantlingHeader, dismantlingRows, maintenanceHeader, maintenanceRows, mountingHeader, mountingRows, mountingRowsWithoutTrails, trailHeader, trailHeaderAdditionalMaterial, trailHeaderAdditionalWorks, trailRows, trailRowsAdditionalMaterial, trailRowsAdditionalWorks } from "assets/tables-data.js";

import Head from "next/head";
import React from "react";
import Table from "components/Table/Table.js";
import { WINDOW_WIDTH } from "constants/constants.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";
import { useWindowSize } from "hooks/use-window-size.js";

const useStyles = makeStyles(styles);


export default function PricesPage() {
  const classes = useStyles();
  const windowSize = useWindowSize();

  const windowWidth = windowSize?.width < WINDOW_WIDTH.SM ? "SM" : "LG";

  return (
    <>
      <Head>
        <title>Вартість монтажу кондиціонерів у Києві | Air Master</title>
        <meta name="description" content="Прайс-лист на роботи з встановлення та технічного обслуговування кондиціонерів у Києві та Київській області" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <h1 className={ classes.title }>Вартість установки кондиціонерів.</h1>
            <div className={ classes.tableContainer }>
              <h4 className={ classes.sectionTitle }>Стандартний монтаж кондиціонерів</h4>
              <Table className={ classes.table } rows={ mountingRows[ windowWidth ] } header={ mountingHeader[ windowWidth ] } />
              <h4 className={ classes.sectionTitle }>Навіска блоків (якщо фреономагістраль вже закладена на етапі ремонту)</h4>
              <Table className={ classes.table } rows={ mountingRowsWithoutTrails[ windowWidth ] } header={ mountingHeader[ windowWidth ] } />
              <h4 className={ classes.sectionTitle }>ТО кондиціонерів</h4>
              <Table className={ classes.table } rows={ maintenanceRows } header={ maintenanceHeader } />
              <h4 className={ classes.sectionTitle }>Закладка трас завдовжки до 3 м.п.</h4>
              <Table className={ classes.table } rows={ trailRows } header={ trailHeader } />
              <h4 className={ classes.sectionTitle }>Додаткові роботи, вартість за 1 м.п.</h4>
              <Table className={ classes.table } rows={ trailRowsAdditionalWorks } header={ trailHeaderAdditionalWorks } />
              <h4 className={ classes.sectionTitle }>Вартість матеріалів, що не входять до стандартного монтажу (фреономагістраль понад 3 м, за 1 м.п.)</h4>
              <Table className={ classes.table } rows={ trailRowsAdditionalMaterial } header={ trailHeaderAdditionalMaterial } />
              <h4 className={ classes.sectionTitle }>Демонтаж кондиціонерів</h4>
              <Table className={ classes.table } rows={ dismantlingRows } header={ dismantlingHeader } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
