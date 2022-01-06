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

import { maintenanceRows, maintenanceHeader } from "assets/tables-data.js";

import styles from "styles/jss/nextjs-material-kit/pages/pages.js";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function MaintenancePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={ classes.wrapper }>
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
          <h2>Техническое обслуживание кондиционеров.</h2>
          <div className={ classes.sectionText }>
            <h4>Техническое обслуживание кондиционеров, включает следующий перечень работ: </h4>
            <ol className={ classes.list }>
              <li className={ classes.listItem }>Проверка работоспособности кондиционера в разных режимах</li>
              <li className={ classes.listItem }>Замер температуры воздуха на выходе внутреннего блока.</li>
              <li className={ classes.listItem }>Осмотр кондиционера  на наличие утечек</li>
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
            <h4 className={ classes.sectionTitle }>Прайс-лист</h4>
            <Table className={ classes.table } rows={ maintenanceRows } header={ maintenanceHeader } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
