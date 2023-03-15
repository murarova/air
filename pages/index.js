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
        <title>Продажа кондиціонерів у Києві | Технічне обслуговування кондиціонерів в Києві | Air Master</title>
        <meta name="description" content="Продажа кондиціонерів у Києві ❄️ Технічне обслуговування кондиціонерів ⭐ Закладка трас для кондиціонерів ✅" />
      </Head>
      <div className={ classes.wrapper }>
        <Parallax filter responsive image="/img/bg.jpeg">
          <div className={ classes.container }>
            <GridContainer>
              <GridItem xs={ 12 } sm={ 12 } md={ 12 } lg={ 9 }>
                <h1 className={ classes.title }>Встановлення та обслуговування кондиціонерів.</h1>
                <div className={ classes.advertisingBlock }>
                  <ol className={ classes.list }>
                    <li className={ classes.listItem }>Продаж кондиціонерів - <strong className={ classes.accent }>от { convertPriceToUAH(minPrice, Number(rate)) } грн.</strong></li>
                    <li className={ classes.listItem }>Монтаж - <strong className={ classes.accent }>3 500 грн.</strong></li>
                    <li className={ classes.listItem }>Технічне обслуговування - <strong className={ classes.accent }>1 000 грн.</strong></li>
                    <li className={ classes.listItem }>Гарантія на монтаж - <strong className={ classes.accent }>1 рік.</strong></li>
                  </ol>
                </div>
                <br />
                <div className={classes.btnWrapper}>
                  <Button
                    className={classes.btn}
                    color="infoColor"
                    size="md"
                    href="./products"
                  >
                    Купити кондиціонер
                  </Button>
                  <Button
                    color="accentColor"
                    size="md"
                    href="./prices"
                  >
                    Прайс-ліст на послуги
                  </Button>
                </div>
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
  return { props: { products, rate }}
}

