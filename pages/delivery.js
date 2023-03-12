import Head from "next/head";
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function DeliveryPage() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Доставка і оплата | Air Master</title>
        <meta name="description" content="Информация о способах доставки оборудования и кондиціонерів и способов оплаты установки кондиціонерів в Киеве" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.pageWithBackground }>
            <h2>Oплата</h2>
            <p>Оплата за работу, материалы и оборудование производится <span className={ classes.accent }>по наличному</span> и <span className={ classes.accent }>безналичному расчету.</span></p>
            <p>Оплата наличными за все услуги производятся по окончанию работ. Работы по безналичному расчету, выполняются после 100 % предоплаты.</p>

            <div className={ classes.payment }>
              <h4 className={ classes.accent }>Реквизиты для оплаты</h4>
              <p><span className={ classes.paymentPropName }>Получатель:</span><span>ФОП Мураров В.В.</span></p>
              <p><span className={ classes.paymentPropName }>ЄДРПОУ/РНОКПП:</span><span>3122010972</span></p>
              <p><span className={ classes.paymentPropName }>IBAN:</span><span>UA043003460000026005097719901</span></p>
              <p><span className={ classes.paymentPropName }>Банк:</span><span>АТ "Альфа - Банк"</span></p>
            </div>

            <h2>Доставка</h2>
            <p className={ classes.accent }>Доставка оборудования по г.Киев – бесплатная.</p>
            <p>Доставка оборудования по Киевской области – 10 грн / км от КП.</p>
          </div>

        </div>
      </div>
    </>
  );
}


