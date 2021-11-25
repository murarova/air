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

import { mountingRows, mountingRowsWithoutTrails, mountingHeader } from "assets/tables-data.js";

import styles from "styles/jss/nextjs-material-kit/pages/pages.js";
const useStyles = makeStyles(styles);

export default function MountingPage(props) {
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
          <h2>Монтаж кондиционеров.</h2>
          <div className={ classes.sectionText }>
            <h4 className={ classes.sectionTitle }>Cтандартный монтаж кондиционеров в себя включает следующие виды работ: </h4>
            <ul className={ classes.list }>
              <li className={ classes.listItem }>Рекомендации по оптимальному расположению кондиционера</li>
              <li className={ classes.listItem }>Бурение одного отверстия под фреономагистраль.</li>
              <li className={ classes.listItem }>Монтаж  наружного и внутреннего блока кондиционера.</li>
              <li className={ classes.listItem }>Вакуумация и проверка системы на герметичность</li>
              <li className={ classes.listItem }>Запуск и пусконаладочные работы.</li>
            </ul>
            <h4 className={ classes.sectionTitle }>Стандартный монтаж кондиционеров в себя включает следующие материалы: </h4>
            <ul className={ classes.list }>
              <li className={ classes.listItem }>Фреономагистраль до 3 м.(стоимость каждого дополнительного метра указан в таблице)</li>
              <li className={ classes.listItem }>Дренажная труба до 3 м.</li>
              <li className={ classes.listItem }>Комплект кронштейнов К1 (порошковая покраска).</li>
              <li className={ classes.listItem }>Метизы (анкера, дюбеля, гайки, шайбы)</li>
            </ul>
            <span>Используем только профессиональное, современное оборудование и качественные сертифицированные материалы.</span><br />
            <span>Даем гарантию на выполненные монтажные работы.</span>
          </div>
          <div className={ classes.tableContainer }>
            <h4 className={ classes.sectionTitle }>Прайс-лист</h4>
            <Table className={ classes.table } rows={ mountingRows } header={ mountingHeader } />
            <h4 className={ classes.sectionTitle }>Навеска блоков (если фреономагистраль уже заложена на этапе ремонта)</h4>
            <Table className={ classes.table } rows={ mountingRowsWithoutTrails } header={ mountingHeader } />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
