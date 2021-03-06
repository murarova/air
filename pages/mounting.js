import React from "react";
import Head from "next/head";
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
import ContactMe from "components/ContactMe/ContactMe.js";
import { useWindowSize } from "hooks/use-window-size.js";

import { WINDOW_WIDTH } from "constants/constants.js";

import { mountingRows, mountingRowsWithoutTrails, mountingHeader } from "assets/tables-data.js";

import styles from "styles/pages/pages.js";
const useStyles = makeStyles(styles);

export default function MountingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const windowSize = useWindowSize();

  const windowWidth = windowSize?.width < WINDOW_WIDTH.SM ? "SM" : "LG";

  return (
    <>
    <Head>
      <title>Монтаж кондиционеров в Киеве | Air Master</title>
      <meta name="description" content="Монтаж кондиционеров в Киеве. Лучшее соотношение цена - качество. Мы используем только профессиональное, современное оборудование и качественные сертифицированные материалы.Даем гарантию на выполненные монтажные работы." />
    </Head>
    <div className={ classes.wrapper }>
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
          <h1>Монтаж кондиционеров в Киеве.</h1>
          <div className={ classes.sectionText }>
            <h4 className={ classes.sectionTitle }>Cтандартный монтаж кондиционеров в себя включает следующие виды работ: </h4>
            <ul className={ classes.list }>
              <li className={ classes.listItem }>Рекомендации по оптимальному расположению кондиционера.</li>
              <li className={ classes.listItem }>Бурение одного отверстия под фреономагистраль.</li>
              <li className={ classes.listItem }>Монтаж  наружного и внутреннего блока кондиционера.</li>
              <li className={ classes.listItem }>Вакуумация и проверка системы на герметичность.</li>
              <li className={ classes.listItem }>Запуск и пусконаладочные работы.</li>
            </ul>
            <h4 className={ classes.sectionTitle }>Стандартный монтаж кондиционеров в себя включает следующие материалы: </h4>
            <ul className={ classes.list }>
              <li className={ classes.listItem }>Фреономагистраль до 3 м.(стоимость каждого дополнительного метра указан в таблице).</li>
              <li className={ classes.listItem }>Дренажная труба до 3 м.</li>
              <li className={ classes.listItem }>Комплект кронштейнов К1 (порошковая покраска).</li>
              <li className={ classes.listItem }>Метизы (анкеры, дюбели, гайки, шайбы.</li>
            </ul>
            <span>Используем только профессиональное, современное оборудование и качественные сертифицированные материалы.</span><br />
            <span>Даем гарантию на выполненные монтажные работы.</span>
          </div>
          <div className={ classes.tableContainer }>
            <h4 className={ classes.sectionTitle }>Монтаж кондиционеров.</h4>
            <Table className={ classes.table } rows={ mountingRows[ windowWidth ] } header={ mountingHeader[ windowWidth ] } />
            <h4 className={ classes.sectionTitle }>Навеска блоков (если фреономагистраль уже заложена на этапе ремонта)</h4>
            <Table className={ classes.table } rows={ mountingRowsWithoutTrails[ windowWidth ] } header={ mountingHeader[ windowWidth ] } />
          </div>
        </div>
      </div>
      <Footer />
      <ContactMe />
    </div>
    </>
  );
}
