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

function createData(name, ...rest) {
  const id = nanoid();
  return { id, name, data: [ ...rest ] };
}

const rows = [
  createData('Монтаж фреоновой магистрали, длинной до 3 м.п.', "20-25 м2", "07-09", "1500 грн"),
  createData('Монтаж фреоновой магистрали, длинной до 3 м.п.', "35 м2", "12", "1600 грн"),
  createData('Монтаж фреоновой магистрали, длинной до 3 м.п.', "50 м2", "18", "1900 грн"),
  createData('Монтаж фреоновой магистрали, длинной до 3 м.п.', "от 70 м2", "24 - 30", "2400 грн")
];

const rowsAdditionalWorks = [
  createData('Штробление стен под фреономагистраль ( кирпич, газоблок)', "м.п.", "1", "150 грн"),
  createData('Штробление стен под фреономагистраль ( бетон)', "м.п.", "1", "250 грн"),
  createData('Штробление стен под дренажную трубу', "м.п.", "1", "60 грн"),
  createData('Дополнительное отверстие под фреономагистраль (кирпич)', "м.п.", "1", "150 грн"),
  createData('Дополнительное отверстие под фреономагистраль (бетон)', "м.п.", "1", "250 грн"),
  createData('Монтаж/демонтаж стеклопакета', "м.п.", "1", "150 грн"),
];

const rowsAdditionalMaterial = [
  createData('Фреономагистраль', "м.п.", "20-25 м2", "07-09", "300 грн"),
  createData('Фреономагистраль', "м.п.", "35 м2", "12", "400 грн"),
  createData('Фреономагистраль', "м.п.", "50 м2", "18", "450 грн"),
  createData('Фреономагистраль', "м.п.", "от 70 м2", "24 - 30", "550 грн"),
  createData('Дренажная труба D 16', "м.п.", null, null, "40 грн"),
  createData('Короб-канал 60х60', "м.п.", null, null, "100 грн"),
];

const header = [ 'Вид работ', 'Условная площадь помещения', 'Мощность  кондиционера,  btu', 'Стоимость, грн' ]

const headerAdditionalWorks = [ 'Вид работ', 'Единица измерения ', 'Кол-во', 'Стоимость, грн' ]

const headerAdditionalMaterial = [ 'Материалы', 'Единица измерения ', 'Условная площадь помещения', 'Мощность  кондиционера,  btu', 'Стоимость, грн' ]


export default function TrailPage(props) {
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
            <h4 className={ classes.sectionTitle }>Дополнительные работы</h4>
            <Table className={ classes.table } rows={ rowsAdditionalWorks } header={ headerAdditionalWorks } />
            <h4 className={ classes.sectionTitle }>Стоимость материалов, не входящих в стандартный монтаж (фреономагистраль более 3 м)</h4>
            <Table className={ classes.table } rows={ rowsAdditionalMaterial } header={ headerAdditionalMaterial } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
