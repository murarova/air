import React from "react";
import Head from "next/head";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "styles/pages/pages.js";
import Product from "components/Product/Product";
import { useSelector } from "react-redux";
import { useFirebaseConnect } from 'react-redux-firebase'

const useStyles = makeStyles(styles);

export default function ProductsPage() {
  const classes = useStyles();
  useFirebaseConnect([ { path: 'products' } ])
  const products = useSelector((state) => state.ordered.products)

  return (
    <>
      <Head>
        <title>Продажа кондиционеров в Киеве | Air Master</title>
        <meta name="description" content="Продажа кондиционеров в Киеве ✅ Гарантия ❗  Лучшие цены 💰" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <GridContainer justifyContent="center">
              <GridItem xs={ 12 }>
                <h2 className={ classes.title }>Каталог</h2>
              </GridItem>
            </GridContainer>
            <div className={ classes.sectionContent }>
              <GridContainer spacing={ 4 }>
                { products?.map(({ key, value }) =>
                  <GridItem key={ key } xs={ 12 } sm={ 6 } md={ 4 } lg={ 4 }>
                    <Product { ...value } />
                  </GridItem>) }
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
