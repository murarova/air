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
import HeaderLinks from "components/Header/HeaderLinks.js";
import ContactMe from "components/ContactMe/ContactMe.js";

import catalog from "../../assets/catalog.json";

import styles from "styles/pages/pages.js";

import Product from "components/Product/Product";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ProductsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <>
      <Head>
        <title>Продажа кондиционеров в Киеве | Air Master</title>
        <meta name="description" content="Продажа кондиционеров в Киеве ✅ Гарантия ❗  Лучшие цены 💰" />
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
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <GridContainer justifyContent="center">
              <GridItem xs={ 12 }>
                <h2 className={ classes.title }>Каталог</h2>
              </GridItem>
            </GridContainer>
            <div className={ classes.sectionContent }>
              <GridContainer spacing={ 4 }>
                { catalog.map(item =>
                  <GridItem xs={ 12 } sm={ 6 } md={ 4 } lg={ 4 }>
                    <Product { ...item } />
                  </GridItem>) }
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
        <ContactMe />
      </div>
    </>
  );
}
