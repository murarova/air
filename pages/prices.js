import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Table from "components/Table/Table.js";

import { mountingRows, mountingRowsWithoutTrails, mountingHeader, maintenanceRows, maintenanceHeader,trailRows, trailRowsAdditionalWorks, trailRowsAdditionalMaterial, trailHeader, trailHeaderAdditionalWorks, trailHeaderAdditionalMaterial, dismantlingRows, dismantlingHeader } from "assets/tables-data.js";

import styles from "styles/jss/nextjs-material-kit/pages/pages.js";
const useStyles = makeStyles(styles);

export default function PricesPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={ { color: "dark" } }>
      <Header
        color="white"
        routes={ [] }
        brand="Air Master"
        rightLinks={ <HeaderLinks /> }
        fixed
        { ...rest }
      />
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <h2 className={ classes.title }>Прайс-лист</h2>
          <div className={ classes.tableContainer }>
            <h4 className={ classes.sectionTitle }>Монтаж кондиционеров</h4>
            <Table className={ classes.table } rows={ mountingRows } header={ mountingHeader } />
            <h4 className={ classes.sectionTitle }>Навеска блоков (если фреономагистраль уже заложена на этапе ремонта)</h4>
            <Table className={ classes.table } rows={ mountingRowsWithoutTrails } header={ mountingHeader } />
            <h4 className={ classes.sectionTitle }>ТО кондиционеров</h4>
            <Table className={ classes.table } rows={ maintenanceRows } header={ maintenanceHeader } />
            <h4 className={ classes.sectionTitle }>Закладка трасс</h4>
            <Table className={ classes.table } rows={ trailRows } header={ trailHeader } />
            <h4 className={ classes.sectionTitle }>Дополнительные работы</h4>
            <Table className={ classes.table } rows={ trailRowsAdditionalWorks } header={ trailHeaderAdditionalWorks } />
            <h4 className={ classes.sectionTitle }>Стоимость материалов, не входящих в стандартный монтаж (фреономагистраль более 3 м)</h4>
            <Table className={ classes.table } rows={ trailRowsAdditionalMaterial } header={ trailHeaderAdditionalMaterial } />
            <h4 className={ classes.sectionTitle }>Демонтаж кондиционеров</h4>
            <Table className={ classes.table } rows={ dismantlingRows } header={ dismantlingHeader } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
