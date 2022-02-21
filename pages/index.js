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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import ContactMe from "components/ContactMe/ContactMe.js";

import styles from "styles/pages/mainPage.js";

// Sections for this page
import ServicesSection from "main-page-sections/ServicesSection.js";
import Mounting from "main-page-sections/Mounting.js";
import Maintenance from "main-page-sections/Maintenance.js";
import TrailInstallation from "main-page-sections/TrailInstallation.js";
import Dismantling from "main-page-sections/Dismantling.js";
import WhyUs from "main-page-sections/WhyUs.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <>
      <Head>
        <title>Установка кондиционеров в Киеве | Техническое обслуживание кондиционеров в Киеве | Air Master</title>
        <meta name="description" content="Установка кондиционеров в Киеве ❄️ Техническое обслуживание кондиционеров ⭐ Закладка трасс на этапе ремонта ✅ Гарантия ❗  Лучшие цены 💰" />
      </Head>
      <div className={ classes.wrapper }>
        <Header
          color="halfTransparent"
          routes={ dashboardRoutes }
          brand="Air Master"
          rightLinks={ <HeaderLinks /> }
          fixed
          changeColorOnScroll={ {
            height: 500,
            color: "white",
          } }
          { ...rest }
        />
        <Parallax filter responsive image="/img/bg.jpeg">
          <div className={ classes.container }>
            <GridContainer>
              <GridItem xs={ 12 } sm={ 12 } md={ 12 } lg={ 9 }>
                <h1 className={ classes.title }>Установка и обслуживание кондиционеров.</h1>
                <div className={ classes.advertisingBlock }>
                  <ol className={ classes.list }>
                    <li className={ classes.listItem }>Монтаж кондиционера - <strong className={ classes.accent }>3 000 грн.</strong></li>
                    <li className={ classes.listItem }>Техническое обслуживание - <strong className={ classes.accent }>500 грн.</strong></li>
                    <li className={ classes.listItem }>Гарантия на монтаж - <strong className={ classes.accent }>2 года.</strong></li>
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
            <WhyUs />
            <Mounting />
            <Maintenance />
            <TrailInstallation />
            <Dismantling />
          </div>
        </div>
        <Footer />
        <ContactMe />
      </div>
    </>
  );
}
