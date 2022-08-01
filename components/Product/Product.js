import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { truncate, convertPriceToUAH } from "utils/utils.js";
import { useStyles } from "styles/components/productStyle.js";
import { useRouter } from 'next/router'

export default function Product({
  id,
  title,
  brand,
  images,
  description,
  price,
  articleNumber
}) {
  const classes = useStyles();
  const router = useRouter()

  function handleCardClick() {
    router.push(`/products/${ id }`)
  }

  return (
    <Card className={ classes.root }>
      <CardActionArea onClick={ handleCardClick }>
        <CardMedia
          className={ classes.media }
          image={ images }
          title={ title }
        />
        <CardContent className={ classes.content }>
          <Typography variant="h5" component="h2">
            Кондиционер { brand } { title }
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            { articleNumber }
          </Typography>
          <Typography
            styles={ {
              textOverflow: "ellipsis",
              "-webkit-line-clamp": "3",
              lineClamp: "3",
            } }
            variant="body2"
            color="textSecondary"
            component="p">
            { truncate(description, 150) }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={ classes.actions }>
        <Typography>
          Цена: { convertPriceToUAH(price, 38) } грн
        </Typography>
        <Button className={ classes.more } onClick={ handleCardClick }>
          Подробнее
        </Button>
      </CardActions>
    </Card >
  );
}
