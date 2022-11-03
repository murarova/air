import { convertPriceToUAH, truncate } from "utils/utils.js";
import { isEmpty, isLoaded } from "react-redux-firebase"

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditProduct from "../EditProduct/EditProduct";
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import { useFirebase } from 'react-redux-firebase'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useStyles } from "styles/components/productStyle.js";

export default function Product({ product, id }) {
  const classes = useStyles();
  const router = useRouter();
  const rate = useSelector((state) => state.firebase.data.rate);
  const firebase = useFirebase()
  const auth = useSelector((state) => state.firebase.auth)
  const isLoggedIn = isLoaded(auth) && !isEmpty(auth)

  console.log('isLoggedIn', isLoggedIn);

  const {
    title,
    brand,
    images,
    description,
    price,
    articleNumber
  } = product;

  const [ isEdit, setIsEdit ] = useState(false);

  function handleCardClick() {
    router.push(`/products/${ articleNumber }`)
  }

  function handleDeleteProduct() {
    firebase.remove(`products/${ id }/`)
  }

  return (
    <>
      <Card className={ classes.root }>
        <CardActionArea style={ { pointerEvents: "none" } }>
          { isLoggedIn && <div className={ classes.btnWrapper }>
            <IconButton onClick={ () => setIsEdit(true) }>
              <EditIcon />
            </IconButton>
            <IconButton onClick={ () => handleDeleteProduct(id) }>
              <DeleteIcon />
            </IconButton>
          </div> }
          { !images || !images[ 0 ]?.downloadURL
            ? <Skeleton animation="wave" variant="rect" className={ classes.media } />
            : <CardMedia
              className={ classes.media }
              image={ images[ 0 ].downloadURL }
              title={ title }
            /> }
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
            Цена: { convertPriceToUAH(price, Number(rate)) } грн
          </Typography>
          <Button className={ classes.more } onClick={ handleCardClick }>
            Подробнее
          </Button>
        </CardActions>
      </Card >
      { isEdit && <EditProduct onClose={ () => setIsEdit(false) } initialValues={ { ...product, id } } /> }
    </>
  );
}
