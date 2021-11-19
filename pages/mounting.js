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
  createData('Стандартный монтаж', "20-25 м2", "07-09", "3000 грн"),
  createData('Стандартный монтаж', "35 м2", "12", "3200 грн"),
  createData('Стандартный монтаж', "50 м2", "18", "3600 грн"),
  createData('Стандартный монтаж (сплит, кассетного, напольнопотолочного типа)', "от 70 м2", "24 - 30", "4500 грн"),
  createData('Стандартный монтаж (сплит, кассетного, напольнопотолочного типа)', "от 100 м2", "36 - 60", "6500 грн"),
];

const rowsWithoutTrails = [
  createData('Кондиционер', "20-25 м2", "07-09", "1500 грн"),
  createData('Кондиционер', "35 м2", "12", "1700 грн"),
  createData('Кондиционер', "50 м2", "18", "2000 грн"),
  createData('Кондиционер (сплит, кассетного, напольнопотолочного типа)', "от 70 м2", "24 - 30", "от 2500 грн"),
  createData('Кондиционер (сплит, кассетного, напольнопотолочного типа)', "от 100 м2", "36 - 60", "от 3500 грн"),
];

const header = [ 'Вид работ', 'Условная площадь помещения', 'Мощность  кондиционера,  btu', 'Стоимость, грн' ]


export default function MountingPage(props) {
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
          <h2>Монтаж кондиционеров.</h2>
          <div className={ classes.sectionText }>
            <h4 className={ classes.sectionTitle }>Cтандартный монтаж кондиционеров в себя включает следующие виды работ: </h4>
            <ol className={ classes.list }>
              <li className={ classes.listItem }>Рекомендации по оптимальному расположению кондиционера</li>
              <li className={ classes.listItem }>Бурение одного отверстия под фреономагистраль.</li>
              <li className={ classes.listItem }>Монтаж  наружного и внутреннего блока кондиционера.</li>
              <li className={ classes.listItem }>Вакуумация и проверка системы на герметичность</li>
              <li className={ classes.listItem }>Запуск и пусконаладочные работы.</li>
            </ol>
            <h4 className={ classes.sectionTitle }>Стандартный монтаж кондиционеров в себя включает следующие материалы: </h4>
            <ol className={ classes.list }>
              <li className={ classes.listItem }>Фреономагистраль до 3 м.(стоимость каждого дополнительного метра указан в таблице)</li>
              <li className={ classes.listItem }>Дренажная труба до 3 м.</li>
              <li className={ classes.listItem }>Комплект кронштейнов К1 (порошковая покраска).</li>
              <li className={ classes.listItem }>Метизы (анкера, дюбеля, гайки, шайбы)</li>
            </ol>
            <span>Используем только профессиональное, современное оборудование и качественные сертифицированные материалы.</span><br />
            <span>Даем гарантию на выполненные монтажные работы.</span>
          </div>
          <div className={ classes.tableContainer }>
            <h4 className={ classes.sectionTitle }>Прайс-лист</h4>
            <Table className={ classes.table } rows={ rows } header={ header } />
            <h4 className={ classes.sectionTitle }>Навеска блоков (если фреономагистраль уже заложена на этапе ремонта)</h4>
            <Table className={ classes.table } rows={ rowsWithoutTrails } header={ header } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
