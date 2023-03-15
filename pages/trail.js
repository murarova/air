import { trailHeader, trailHeaderAdditionalMaterial, trailHeaderAdditionalWorks, trailRows, trailRowsAdditionalMaterial, trailRowsAdditionalWorks } from "assets/tables-data.js";

import React from "react";
import Table from "components/Table/Table.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function TrailPage() {
  const classes = useStyles();
  return (
    <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <h1>Закладка трас для кондиціонерів.</h1>
          <div className={ classes.sectionText }>
            <h4 className={ classes.trailTitle }>Закладання фреономагістралі здійснюється двома способами.</h4>
            <h4 className={ classes.trailTitle }>До першого варіанта належить закладка на етапі ремонту. </h4>
            <p> На початку треба визначитися з розміщенням меблів у кімнаті, щоб уникнути прямого попадання потоку повітря від кондиціонера в те місце, де ви проводите найбільше часу, це робочий стіл, ліжко, диван і т.д.</p>
            <p>Також перед монтажем фреономагістралі, важливо розуміти якого типу буде стеля, щоб правильно розрахувати висоту внутрішнього блоку. Майстер розмічає на стіні внутрішній блок з урахуванням висоти майбутньої стелі та повітряного зазору між блоком та стелею для коректної роботи кондиціонера. </p>
            <p>Потім розмічаються штроби під фреономагістраль від внутрішнього блоку до зовнішнього та штроби під дренажну трубу (якщо злив конденсату відбувається у санвузол). Далі штробимо стіни, робимо отвір у фасадній стіні, укладаємо фреономагістраль та дренажну трубу, запінюємо отвір, герметизуємо мідні трубки від попадання вологи. У цьому перший етап закінчено.</p>
            <p>Кріплення блоків та підключення відбувається після закінчення ремонту.</p>
            <p>На виході ви отримуєте естетичний вигляд кондиціонера, без видимих комунікацій, пластикових коробів і т.д.</p>
            <h4 className={ classes.trailTitle }>Другий варіант, це монтаж фреономагістралі по готовому ремонту.</h4>
            <p>Фреономагістраль монтується у пластиковому коробі. У цьому варіанті монтаж фреономагістралі та монтаж кондиціонерів виконується за один приїзд бригади.</p>
            <p>У стандартну закладку входить: 3 метри фреонової магістралі, 3 метри дренажної трубки, буріння одного отвору.</p>
            <p>Вартість наступного метра фреономагістралі та інших матеріалів з урахуванням роботи вказана у таблиці.</p>
            <p>Використовуємо лише якісні, сертифіковані матеріали.</p>
          </div>
          <div className={ classes.tableContainer }>
            <h4 className={ classes.sectionTitle }>Прайс-ліст</h4>
            <Table className={ classes.table } rows={ trailRows } header={ trailHeader } />
            <h4 className={ classes.sectionTitle }>Додаткові роботи</h4>
            <Table className={ classes.table } rows={ trailRowsAdditionalWorks } header={ trailHeaderAdditionalWorks } />
            <h4 className={ classes.sectionTitle }>Вартість матеріалів, що не входять до стандартного монтажу (фреономагістраль понад 3 м)</h4>
            <Table className={ classes.table } rows={ trailRowsAdditionalMaterial } header={ trailHeaderAdditionalMaterial } />
          </div>
        </div>
      </div>
    </div>
  );
}
