import Carousel from 'react-material-ui-carousel'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Product from "components/Product/Product";
import React from 'react';
import { WINDOW_WIDTH } from "constants/constants.js";
import chunk from "lodash/chunk";
import { makeStyles } from '@material-ui/core/styles';
import styles from "styles/main-page-sections/whyUsStyles.js";
import { useWindowSize } from "hooks/use-window-size.js";

const useStyles = makeStyles(styles);

export default function Products({ products, rate }) {
  const classes = useStyles();
  const windowSize = useWindowSize();

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
        autoPlay={false}
        cycleNavigation>
        { data.map((items, i) =>
          <GridContainer key={ i } spacing={ 4 }>
            { items.map((product) =>
              <GridItem key={ product.id } xs={ Number(12 / numberOfParts()) }>
                <Product product={ product } rate={rate} id={product.id} />
              </GridItem>) }
          </GridContainer>
        )
        }
      </Carousel>
    </div>
  );
}
