import React from "react";
import Head from "next/head";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Table from "components/Table/Table.js";
import { useWindowSize } from "hooks/use-window-size.js";

import { WINDOW_WIDTH } from "constants/constants.js";

import { mountingRows, mountingHeader, mountingRowsWithoutTrails, maintenanceRows, maintenanceHeader, trailRows, trailRowsAdditionalWorks, trailRowsAdditionalMaterial, trailHeader, trailHeaderAdditionalWorks, trailHeaderAdditionalMaterial, dismantlingRows, dismantlingHeader } from "assets/tables-data.js";

import styles from "styles/pages/pages.js";
const useStyles = makeStyles(styles);


export default function PricesPage() {
  const classes = useStyles();
  const windowSize = useWindowSize();

  const windowWidth = windowSize?.width < WINDOW_WIDTH.SM ? "SM" : "LG";

  return (
    <>
      <Head>
        <title>Стоимость установки кондиционеров в Киеве | Air Master</title>
        <meta name="description" content="Прайс-лист на работы по установке и техническому обслуживанию кондиционеров в Киеве и Киевской области" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <h1 className={ classes.title }>Стоимость установки кондиционеров.</h1>
            <div className={ classes.tableContainer }>
              <h4 className={ classes.sectionTitle }>Стандартный монтаж кондиционеров</h4>
              <Table className={ classes.table } rows={ mountingRows[ windowWidth ] } header={ mountingHeader[ windowWidth ] } />
              <h4 className={ classes.sectionTitle }>Навеска блоков (если фреономагистраль уже заложена на этапе ремонта)</h4>
              <Table className={ classes.table } rows={ mountingRowsWithoutTrails[ windowWidth ] } header={ mountingHeader[ windowWidth ] } />
              <h4 className={ classes.sectionTitle }>ТО кондиционеров</h4>
              <Table className={ classes.table } rows={ maintenanceRows } header={ maintenanceHeader } />
              <h4 className={ classes.sectionTitle }>Закладка трасс, длиной до 3 м.п.</h4>
              <Table className={ classes.table } rows={ trailRows } header={ trailHeader } />
              <h4 className={ classes.sectionTitle }>Дополнительные работы, cтоимость за 1 м.п.</h4>
              <Table className={ classes.table } rows={ trailRowsAdditionalWorks } header={ trailHeaderAdditionalWorks } />
              <h4 className={ classes.sectionTitle }>Стоимость материалов, не входящих в стандартный монтаж (фреономагистраль более 3 м, за 1 м.п.)</h4>
              <Table className={ classes.table } rows={ trailRowsAdditionalMaterial } header={ trailHeaderAdditionalMaterial } />
              <h4 className={ classes.sectionTitle }>Демонтаж кондиционеров</h4>
              <Table className={ classes.table } rows={ dismantlingRows } header={ dismantlingHeader } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
