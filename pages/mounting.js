import { mountingHeader, mountingRows, mountingRowsWithoutTrails } from "assets/tables-data.js";

import Head from "next/head";
import React from "react";
// core components
import Table from "components/Table/Table.js";
import { WINDOW_WIDTH } from "constants/constants.js";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";
import { useWindowSize } from "hooks/use-window-size.js";

const useStyles = makeStyles(styles);

export default function MountingPage() {
  const classes = useStyles();
  const windowSize = useWindowSize();

  const windowWidth = windowSize?.width < WINDOW_WIDTH.SM ? "SM" : "LG";

  return (
    <>
      <Head>
        <title>Монтаж кондиціонерів у Києві | Air Master</title>
        <meta name="description" content="Монтаж кондиціонерів в Києві. Монтаж кондиціонерів за один день. Найкраще співвідношення Ціна - якість. Ми використовуємо лише професійне, сучасне обладнання та якісні сертифіковані матеріали. Даємо гарантію на виконані монтажні роботи." />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <h1>Монтаж кондиціонерів в Києві.</h1>
            <div className={ classes.sectionText }>
              <h4 className={ classes.sectionTitle }>Стандартний монтаж кондиціонерів включає такі види робіт: </h4>
              <ul className={ classes.list }>
                <li className={ classes.listItem }>Рекомендації щодо оптимального розташування кондиціонера.</li>
                <li className={ classes.listItem }>Буріння одного отвору під фреономагістраль.</li>
                <li className={ classes.listItem }>Монтаж зовнішнього та внутрішнього блоку кондиціонера.</li>
                <li className={ classes.listItem }>Вакуумація та перевірка системи на герметичність.</li>
                <li className={ classes.listItem }>Запуск та пусконалагоджувальні роботи.</li>
              </ul>
              <h4 className={ classes.sectionTitle }>Стандартний монтаж кондиціонерів включає такі матеріали: </h4>
              <ul className={ classes.list }>
                <li className={ classes.listItem }>Фреономагістраль до 3 м (вартість кожного додаткового метра вказаний у таблиці).</li>
                <li className={ classes.listItem }>Дренажна труба до 3м.</li>
                <li className={ classes.listItem }>Комплект кронштейнів К1 (порошкове фарбування).</li>
                <li className={ classes.listItem }>Металовироби (анкери, дюбелі, гайки, шайби).</li>
              </ul>
              <span>Використовуємо лише професійне, сучасне обладнання та якісні сертифіковані матеріали.</span><br />
              <span>Даємо гарантію на виконані монтажні роботи.</span>
            </div>
            <div className={ classes.tableContainer }>
              <h4 className={ classes.sectionTitle }>Монтаж кондиціонерів.</h4>
              <Table className={ classes.table } rows={ mountingRows[ windowWidth ] } header={ mountingHeader[ windowWidth ] } />
              <h4 className={ classes.sectionTitle }>Монтаж блоків (якщо фреономагістраль вже закладена на етапі ремонту)</h4>
              <Table className={ classes.table } rows={ mountingRowsWithoutTrails[ windowWidth ] } header={ mountingHeader[ windowWidth ] } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
