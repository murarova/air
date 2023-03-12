import { convertPriceToUAH, truncate } from "utils/utils.js";

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
import createNotification from "components/Notify/Notify"
import { deleteProduct } from "services/services";
import { useAuth } from "context/auth";
import { useCart } from "context/shopping-cart";
import { useRouter } from 'next/router'
import { useState } from "react";
import { useStyles } from "styles/components/productStyle.js";

export default function Product({ product, rate }) {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useAuth()
  const { addToCart } = useCart();

  const {
    title,
    brand,
    images,
    description,
    price,
    articleNumber,
    id
  } = product;

  const [ isEdit, setIsEdit ] = useState(false);

  function handleCardClick() {
    router.push(`/products/${ id }`)
  }

  async function handleDeleteProduct() {
    await deleteProduct(id)
    router.push(router.asPath, undefined, { unstable_skipClientCache: true })
  }

  function handleAddToCart() {
    addToCart(product)
    createNotification("success", "Товар додано до кошика")
  }

  return (
    <>
      <Card className={ classes.root }>
        { user && <div className={ classes.btnWrapper }>
          <IconButton onClick={ () => setIsEdit(true) }>
            <EditIcon />
          </IconButton>
          <IconButton onClick={ handleDeleteProduct }>
            <DeleteIcon />
          </IconButton>
        </div> }
        <CardActionArea onClick={ handleCardClick }>
          { !images || !images[ 0 ]?.downloadURL
            ? <Skeleton animation="wave" variant="rect" className={ classes.media } />
            : <CardMedia
              className={ classes.media }
              image={ images[ 0 ].downloadURL }
              title={ title }
            /> }
          <CardContent className={ classes.content }>
            <Typography variant="h5" component="h2">
              Кондиціонер { brand } { title }
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
            Ціна: { convertPriceToUAH(price, Number(rate)) } грн.
          </Typography>
          <Button className={ classes.buy } onClick={ handleAddToCart }>
            Купити
          </Button>
        </CardActions>
      </Card >
      { isEdit && <EditProduct onClose={ () => setIsEdit(false) } initialValues={ { ...product, id } } /> }
    </>
  );
}
