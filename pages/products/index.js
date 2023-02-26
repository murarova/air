import { getProducts, getRate } from "../../services/services";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Head from "next/head";
import Product from "components/Product/Product";
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function ProductsPage({ products, rate }) {
  const classes = useStyles();
  
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
                { products.map((product) =>
                  <GridItem key={ product.id } xs={ 12 } sm={ 6 } md={ 6 } lg={ 4 }>
                    <Product product={ product } rate={ rate } />
                  </GridItem>) }
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  const rate = await getRate();
  return { props: { products, rate } }
}
