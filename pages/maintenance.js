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
import { nanoid } from 'nanoid'


import styles from "styles/jss/nextjs-material-kit/pages/pages.js";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

function createData(name, square, power, price) {
  const id = nanoid();
  return { id, name, data: [ square, power, price ] };
}

const rows = [
  createData('Чистка внутреннего блока, ТО', "20-25 м2", "07-09", "500 грн"),
  createData('Чистка внутреннего блока, ТО', "35 м2", "12", "600 грн"),
  createData('Чистка внутреннего блока, ТО', "50 м2", "18", "800 грн"),
  createData('Чистка внутреннего блока, ТО', "от 70 м2", "24 - 30", "1000 грн"),
  createData('Чистка наружного блока парогенератором', null, null, "200 грн"),
  createData('Мойка наружного блока керхером', null, null, "200 грн"),
  createData('Запрака фреоном R - 22, R - 410, R- 32', null, null, "100 гр/ 100 грн"),
  createData('Вакуумирование системы', null, null, "150 грн"),
  createData('Вальцовка соединения (при выявлении утечки фреона)', null, null, "1 шт/ 100 грн")
];

const header = [ 'Вид работ', 'Условная площадь помещения', 'Мощность  кондиционера,  btu', 'Стоимость, грн' ]


export default function MaintenancePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={ { color: "dark" } }>
      <Header
        color="white"
        routes={ dashboardRoutes }
        brand="Vital Air"
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
            <Table className={ classes.table } rows={ rows } header={ header } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
