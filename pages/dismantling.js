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

import {dismantlingRows, dismantlingHeader } from "assets/tables-data.js";

import styles from "styles/jss/nextjs-material-kit/pages/pages.js";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function DismantlingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={ { color: "dark" } }>
      <Header
        color="white"
        routes={ dashboardRoutes }
        brand="Air Master"
        rightLinks={ <HeaderLinks /> }
        fixed
        { ...rest }
      />
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
      <Footer />
    </div>
  );
}
