import { convertPriceToUAH, truncate } from "utils/utils.js";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import { useStyles } from "styles/components/productStyle.js";

export default function BrandCard({ brand, onBrandClick }) {
  const classes = useStyles();

  return (
    <Card className={ classes.brandCard }>
      <CardActionArea onClick={ () => onBrandClick(brand.title) }>
        <CardMedia
          className={ classes.brandMedia }
          image={ brand.image }
          title={ brand.title }
        />
      </CardActionArea>
    </Card >
  );
}
