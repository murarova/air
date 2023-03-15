import { getProduct, getProductsPaths, getRate } from '../../services/services';

import Button from "components/CustomButtons/Button.js";
import Carousel from 'react-material-ui-carousel'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Head from "next/head";
import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import SpecificationTable from "components/SpecificationTable/SpecificationTable.js";
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import { convertPriceToUAH } from "utils/utils.js";
import createNotification from "components/Notify/Notify"
import isEmpty from "lodash/isEmpty";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";
import { useCart } from "context/shopping-cart";

const useStyles = makeStyles(styles);

export default function ProductPage({ product, rate }) {
  const classes = useStyles();
  const { addToCart } = useCart();


  function handleAddToCart() {
    addToCart(product)
    createNotification("success", "Товар додано до кошика")
  }
  
  return (
    <>
      <Head>
        <title>Купити кондиціонер { product.brand } | Air Master</title>
        <meta name="description" content={`Купити кондиціонер ${ product.brand } ✅ Гарантія ❗  Найкращі ціни 💰`} />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <GridContainer justifyContent="center">
              <GridItem xs={ 12 } md={ 5 }>
                { isEmpty(product?.images)
                  ? <Skeleton animation="wave" variant="rect" className={ classes.imageContainer } />
                  : <Carousel autoPlay={ false }>
                    { product?.images?.map(({ downloadURL, key }) => (
                      <div key={ key } className={ classes.imageContainer }>
                        <img className={ classes.propuctImage } src={ downloadURL } />
                      </div>
                    )) }
                  </Carousel>
                }
              </GridItem>
              <GridItem className={classes.sectionWrapper} xs={ 12 } md={ 7 }>
                <Typography variant="overline" display="block" gutterBottom>
                  { product.articleNumber }
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Кондиціонер { product.brand } { product.title }
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  gutterBottom
                  component="p">
                  { product.description }
                </Typography>
                <div className={ classes.actions }>
                  <Typography style={ { color: "#ef7215" } } variant="h6">
                    Ціна: { convertPriceToUAH(product.price, Number(rate)) } грн
                  </Typography>
                  <Button color="accentColor" onClick={ handleAddToCart }>
                    Купити
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justifyContent="center" style={ { paddingTop: 20 } }>
              <GridItem xs={ 12 }>
                { product.specification && <SpecificationTable data={ product.specification } /> }
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.id);
  const rate = await getRate();
  return { props: { product, rate } }
}

export async function getStaticPaths() {
  const paths = await getProductsPaths()
  return { paths, fallback: false }
}
