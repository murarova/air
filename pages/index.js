import { getProducts, getRate } from "../services/services";

import Button from "components/CustomButtons/Button.js";
import Dismantling from "main-page-sections/Dismantling.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Head from "next/head";
import Maintenance from "main-page-sections/Maintenance.js";
import Mounting from "main-page-sections/Mounting.js";
import Parallax from "components/Parallax/Parallax.js";
import Products from "main-page-sections/Products.js";
import React from "react";
import ServicesSection from "main-page-sections/ServicesSection.js";
import TrailInstallation from "main-page-sections/TrailInstallation.js";
import classNames from "classnames";
import { convertPriceToUAH } from "utils/utils.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/mainPage.js";

const useStyles = makeStyles(styles);

export default function MainPage({ products, rate }) {
  const classes = useStyles();
  const prices = products.map(({ price }) => Number(price)) ?? [];
  const minPrice = Math.min(...prices);
  
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
                    <li className={ classes.listItem }>Продажа кондиционеров - <strong className={ classes.accent }>от { convertPriceToUAH(minPrice, Number(rate)) } грн.</strong></li>
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
            <Products products={products} rate={rate} />
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

export async function getStaticProps() {
  const products = await getProducts();
  const rate = await getRate();
  return { props: { products, rate }, revalidate: 60}
}

