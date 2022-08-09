import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import chunk from "lodash/chunk";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Product from "components/Product/Product";
import { useWindowSize } from "hooks/use-window-size.js";
import { WINDOW_WIDTH } from "constants/constants.js";
import styles from "styles/main-page-sections/whyUsStyles.js";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

export default function Products() {
  const classes = useStyles();
  const windowSize = useWindowSize();

  const products = useSelector((state) => state.ordered.products);

  const numberOfParts = () => {
    if (!windowSize?.width) {
      return;
    }
    if (windowSize?.width < Number(WINDOW_WIDTH.MD)) {
      return 1;
    }
    if (windowSize?.width > Number(WINDOW_WIDTH.MD) && windowSize?.width < Number(WINDOW_WIDTH.LG)) {
      return 2;
    }
    if (windowSize?.width > Number(WINDOW_WIDTH.LG)) {
      return 3;
    }
  }
  const data = chunk(products, numberOfParts());

  return (
    <div className={ classes.section }>
      <GridContainer justifyContent="center">
        <GridItem xs={ 12 }>
          <h2 className={ classes.title }>Купить кондиционер</h2>
        </GridItem>
      </GridContainer>
      <Carousel swipe
        autoPlay
        cycleNavigation>
        { data?.map((items, i) =>
          <GridContainer key={ i } spacing={ 4 }>
            { items.map(({ key, value }) =>
              <GridItem key={ key } xs={ Number(12 / numberOfParts()) }>
                <Product { ...value } />
              </GridItem>) }
          </GridContainer>
        )
        }
      </Carousel>
    </div>
  );
}
