import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import chunk from "lodash/chunk";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Product from "components/Product/Product";
import Paper from '@material-ui/core/Paper';

import styles from "styles/main-page-sections/whyUsStyles.js";
import catalog from "assets/catalog.json";


const useStyles = makeStyles(styles);

export default function WhyUs() {
  const classes = useStyles();
  const data = chunk(catalog, 3);

  return (
    <div className={ classes.section }>
      <GridContainer justifyContent="center">
        <GridItem xs={ 12 }>
          <h2 className={ classes.title }>Купить кондиционер</h2>
        </GridItem>
      </GridContainer>
      <Carousel swipe
        autoPlay={ false }
        cycleNavigation>
        { data.map((items, i) =>
          <GridContainer spacing={ 4 }>
            { items.map((product, i) =>
              <GridItem key={ i } xs={ 12 } sm={ 4 }>
                <Product { ...product } />
              </GridItem>) }
          </GridContainer>
        )
        }
      </Carousel>
    </div>
  );
}
