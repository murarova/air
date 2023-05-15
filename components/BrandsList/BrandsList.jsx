import BrandCard from 'components/BrandsList/BrandCard';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from 'react';
import { brandsList } from 'config/brands';
import { makeStyles } from '@material-ui/core/styles';
import styles from "styles/main-page-sections/whyUsStyles.js";

const useStyles = makeStyles(styles);

export default function BrandsList({ onBrandClick }) {
  const classes = useStyles();

  return (
    <div className={ classes.brandList }>
      <GridContainer spacing={2} justifyConten="space-evenly">
        { brandsList.map((brand) =>
          <GridItem key={ brand.title } sm={ 4 } md={2}>
            <BrandCard brand={ brand } onBrandClick={ onBrandClick } />
          </GridItem>) }
      </GridContainer>
    </div>
  );
}
