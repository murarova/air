import React from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { convertPriceToUAH } from "utils/utils.js";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import ContactMe from "components/ContactMe/ContactMe.js";
import SpecificationTable from "components/SpecificationTable/SpecificationTable.js";
import Typography from '@material-ui/core/Typography';

import styles from "styles/pages/pages.js";
import catalog from "../../assets/catalog.json";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ProductPage() {
  const classes = useStyles();

  const { articleNumber, brand, title, description, specification, price } = catalog[ 1 ];

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
        />
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <GridContainer justifyContent="center">
              <GridItem xs={ 12 } md={ 5 }>
                <img src="../img/item1.jpeg" alt="" />
              </GridItem>
              <GridItem xs={ 12 } md={ 7 }>
                <Typography variant="overline" display="block" gutterBottom>
                  { articleNumber }
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Кондиционер { brand } { title }
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                  component="p">
                  { description }
                </Typography>
                <Typography variant="h6">
                  Цена: { convertPriceToUAH(price, 38) } грн
                </Typography>
              </GridItem>
            </GridContainer>
            <GridContainer justifyContent="center" style={ { paddingTop: 20 } }>
              <GridItem xs={ 12 }>
                <SpecificationTable data={ specification } />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer />
        <ContactMe />
      </div>
    </>
  );
}
