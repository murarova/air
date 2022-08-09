import React from "react";
import Head from "next/head";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/pages/mainPage.js";
import { useFirebaseConnect } from 'react-redux-firebase'

// Sections for this page
import ServicesSection from "main-page-sections/ServicesSection.js";
import Mounting from "main-page-sections/Mounting.js";
import Maintenance from "main-page-sections/Maintenance.js";
import TrailInstallation from "main-page-sections/TrailInstallation.js";
import Dismantling from "main-page-sections/Dismantling.js";
import Products from "main-page-sections/Products.js";

const useStyles = makeStyles(styles);

export default function MainPage() {
  const classes = useStyles();
  useFirebaseConnect([ { path: 'products' } ])
  return (
    <>
      <Head>
        <title>Установка кондиционеров в Киеве | Техническое обслуживание кондиционеров в Киеве | Air Master</title>
        <meta name="description" content="Установка кондиционеров в Киеве ❄️ Техническое обслуживание кондиционеров ⭐ Закладка трасс на этапе ремонта ✅ Гарантия ❗  Лучшие цены 💰" />
      </Head>
      <div className={ classes.wrapper }>
        <Parallax filter responsive image="/img/bg.jpeg">
          <div className={ classes.container }>
            <GridContainer>
              <GridItem xs={ 12 } sm={ 12 } md={ 12 } lg={ 9 }>
                <h1 className={ classes.title }>Установка и обслуживание кондиционеров.</h1>
                <div className={ classes.advertisingBlock }>
                  <ol className={ classes.list }>
                    <li className={ classes.listItem }>Продажа кондиционеров - <strong className={ classes.accent }>от 16 500 грн.</strong></li>
                    <li className={ classes.listItem }>Монтаж - <strong className={ classes.accent }>3 500 грн.</strong></li>
                    <li className={ classes.listItem }>Техническое обслуживание - <strong className={ classes.accent }>1 000 грн.</strong></li>
                    <li className={ classes.listItem }>Гарантия на монтаж - <strong className={ classes.accent }>1 год.</strong></li>
                  </ol>
                </div>
                <br />
                <Button
                  color="accentColor"
                  size="lg"
                  href="./prices"
                >
                  Прайс-лист
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <ServicesSection />
            <Products />
            <Mounting />
            <Maintenance />
            <TrailInstallation />
            <Dismantling />
          </div>
        </div>
      </div>
    </>
  );
}
