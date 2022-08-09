import React from "react";
import Head from "next/head";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { convertPriceToUAH } from "utils/utils.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PageChange from "components/PageChange/PageChange.js";
import SpecificationTable from "components/SpecificationTable/SpecificationTable.js";
import Typography from '@material-ui/core/Typography';
import styles from "styles/pages/pages.js";
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'

const useStyles = makeStyles(styles);

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const classes = useStyles();
  useFirebaseConnect([ { path: "products" } ])

  const product = useSelector((state) => state.ordered.products);

  if (!isLoaded(product)) {
    return <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <PageChange />
        </div>
      </div>
    </div>

  }

  if (isEmpty(product)) {
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

  console.log('product', product[ id ]);

  const { value: { articleNumber, brand, title, description, specification, price } } = product[ id ];


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
                  variant="body1"
                  color="textSecondary"
                  gutterBottom
                  component="p">
                  { description }
                </Typography>
                <Typography style={ { color: "#ef7215" } } variant="h6">
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
      </div>
    </>
  );
}
