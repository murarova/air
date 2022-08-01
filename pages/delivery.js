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
import ContactMe from "components/ContactMe/ContactMe.js";

import styles from "styles/pages/pages.js";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function DeliveryPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Head>
        <title>Доставка и оплата | Air Master</title>
        <meta name="description" content="Информация о способах доставки оборудования и кондиционеров и способов оплаты установки кондиционеров в Киеве" />
      </Head>
      <div style={ { color: "dark" } }>
        <Header
          color="white"
          routes={ dashboardRoutes }
          brand="Air Master"
          rightLinks={ <HeaderLinks /> }
          fixed
          { ...rest }
        />
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
        <Footer />
        <ContactMe />
      </div>
    </>
  );
}


