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
        <title>Доставка і оплата кондиціонерів | Air Master</title>
        <meta name="description" content="Інформація про способи доставки обладнання та кондиціонерів та способів оплати встановлення кондиціонерів у Києві" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.pageWithBackground }>
            <h2>Oплата</h2>
            <p>Оплата за роботу, матеріали та обладнання здійснюється <span className={classes.accent }>за готівковим</span> та <span className={ classes.accent }>безготівковим розрахунком.</span></p>
            <p>Оплата готівкою за всі послуги здійснюється після закінчення робіт. Роботи з безготівкового розрахунку виконуються після 100% передоплати.</p>

            <div className={ classes.payment }>
              <h4 className={ classes.accent }>Реквізити для оплати</h4>
              <p><span className={ classes.paymentPropName }>Одержувач:</span><span>ФОП Мураров В.В.</span></p>
              <p><span className={ classes.paymentPropName }>ЄДРПОУ/РНОКПП:</span><span>3122010972</span></p>
              <p><span className={ classes.paymentPropName }>IBAN:</span><span>UA043003460000026005097719901</span></p>
              <p><span className={ classes.paymentPropName }>Банк:</span><span>АТ "СЕНС БАНК"</span></p>
            </div>

            <h2>Доставка</h2>
            <p className={ classes.accent }>Доставка обладнання по м. Київ – безкоштовна.</p>
            <p>Доставка обладнання по Київській області – 10 грн/км від КП.</p>
          </div>

        </div>
      </div>
    </>
  );
}


