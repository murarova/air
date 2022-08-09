import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Table from "components/Table/Table.js";
import { trailRows, trailRowsAdditionalWorks, trailRowsAdditionalMaterial, trailHeader, trailHeaderAdditionalWorks, trailHeaderAdditionalMaterial } from "assets/tables-data.js";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function TrailPage() {
  const classes = useStyles();
  return (
    <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <h1>Закладка трасс для кондиционеров.</h1>
          <div className={ classes.sectionText }>
            <h4 className={ classes.trailTitle }>Закладка фреономагистрали осуществляется двумя способами.</h4>
            <h4 className={ classes.trailTitle }>К первому варианту относиться закладка на этапе ремонта. </h4>
            <p> В начале надо определиться с расстановкой мебели в комнате, что бы избежать прямого  попадания потока воздуха от кондиционера в то место, где вы проводите больше всего времени, это рабочий стол, кровать, диван и т.д.</p>
            <p>Так же перед монтажом фреономагистрали,  важно понимать какого типа будет потолок, что бы правильно рассчитать высоту внутреннего  блока. Мастер размечает на стене внутренний блок с учетом высоты будущего потолка и воздушного зазора между блоком и потолком, для корректной работы кондиционера. </p>
            <p>Затем размечаются штробы под фреономагистраль от внутреннего блока  к наружному и штробы под дренажную трубу (если слив конденсата происходит в санузел). Далее штробим стены, делаем отверстие в фасадной стене, укладываем фреономагистраль и дренажную трубу, запениваем отверстие, герметизируем медные трубки от попадания влаги. На этом первый этап закончен.</p>
            <p>Навеска блоков и подключение происходит по окончанию ремонта.</p>
            <p>Ны выходе вы получаете эстетичный вид кондиционера, без видимых коммуникаций, пластиковых коробов и т.д.</p>
            <h4 className={ classes.trailTitle }>Второй вариант, это монтаж фреономагистрали по готовому ремонту.</h4>
            <p>Фреономагистраль монтируется  в пластиковом коробе. В этом варианте монтаж фреономагистрали и монтаж кондиционеров выполняется за один приезд бригады.</p>
            <p>В стандартную закладку  входит: 3 метра фреоновой магистрали, 3 метра дренажной трубки, бурение 1-го отверстия.</p>
            <p>Стоимость последующего метра фреономагистрали и других материалов с учетом работы указана в таблице.</p>
            <p>Используем только качественные, сертифицированные материалы.</p>
          </div>
          <div className={ classes.tableContainer }>
            <h4 className={ classes.sectionTitle }>Прайс-лист</h4>
            <Table className={ classes.table } rows={ trailRows } header={ trailHeader } />
            <h4 className={ classes.sectionTitle }>Дополнительные работы</h4>
            <Table className={ classes.table } rows={ trailRowsAdditionalWorks } header={ trailHeaderAdditionalWorks } />
            <h4 className={ classes.sectionTitle }>Стоимость материалов, не входящих в стандартный монтаж (фреономагистраль более 3 м)</h4>
            <Table className={ classes.table } rows={ trailRowsAdditionalMaterial } header={ trailHeaderAdditionalMaterial } />
          </div>
        </div>
      </div>
    </div>
  );
}
