import { isLoaded, useFirebaseConnect } from 'react-redux-firebase'

import Carousel from 'react-material-ui-carousel'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Head from "next/head";
import PageChange from "components/PageChange/PageChange.js";
import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import SpecificationTable from "components/SpecificationTable/SpecificationTable.js";
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import { convertPriceToUAH } from "utils/utils.js";
import isEmpty from "lodash/isEmpty";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { useState } from "react";

const useStyles = makeStyles(styles);

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const classes = useStyles();
  const [ product, setProduct ] = useState({});

  useFirebaseConnect([ { path: "products" }, { path: "rate" } ])

  const products = useSelector((state) => state.firebase.ordered.products);
  const rate = useSelector((state) => state.firebase.data.rate);

  useEffect(() => {
    if (!products) {
      return;
    }
    const product = products.find(({ value }) => value.articleNumber === id);
    if (product) {
      setProduct(product.value);
    }
  }, [ products ])

  if (!isLoaded(products) || !isLoaded(rate)) {
    return <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <PageChange />
        </div>
      </div>
    </div>
  }

  if (isEmpty(products)) {
    return <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <Typography variant="body1"
            color="textSecondary">
            Нічого не знайдено
          </Typography>
        </div>
      </div>
    </div>
  }

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
              <GridItem xs={ 12 } md={ 7 }>
                <Typography variant="overline" display="block" gutterBottom>
                  { product.articleNumber }
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Кондиционер { product.brand } { product.title }
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  gutterBottom
                  component="p">
                  { product.description }
                </Typography>
                <Typography style={ { color: "#ef7215" } } variant="h6">
                  Цена: { convertPriceToUAH(product.price, Number(rate)) } грн
                </Typography>
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
