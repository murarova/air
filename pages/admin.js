import { addProduct, addRate, getOrders, getRate } from "../services/services";

import AddProductForm from "../components/AddProduct/AddProdact";
import Button from "components/CustomButtons/Button.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import { INITIAL_PRODUCT } from "../constants/constants";
import OrdersTable from "components/OrdersTable/OrdersTable";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";
import createNotification from "../components/Notify/Notify";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";
import { useState } from "react";

const useStyles = makeStyles(styles);

const Admin = ({ currentRate, orders }) => {
  const classes = useStyles();

  const [ rate, setRate ] = useState(currentRate);
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isAddProductOpen, setIsAddProductOpen ] = useState(false);
  const [ images, setImages ] = useState([]);

  console.log('orders', orders);

  const handleChange = (event) => {
    setRate(event.target.value);
  };

  async function handleSave() {
    if (!rate) {
      setError("Rate field can't be empty")
      return
    }
    setIsLoading(true)
    setError(null)
    await addRate(rate)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
    createNotification("success", "Курс успешно изменен")
  }

  async function handleSubmit(values) {
    try {
      const newProduct = {
        ...values,
        images
      }
      await addProduct(newProduct);
      createNotification("success", "Товар успешно добавлен")
      setIsAddProductOpen(false)
      setImages([])
    } catch (error) {
      createNotification("error", error)
    }
  }

  return (
    <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <div className={ classes.adminWrapper }>
          <div className={ classes.adminContainer }>
            <div className={ classes.rateContainer }>
              <p className={ classes.rateName }>Курс USD/UAH: </p>
              <div className={ classes.progressWrapper }>
                <TextField name="rate" value={ rate } onChange={ handleChange } size="small" type="number" variant="outlined" />
                { isLoading && <CircularProgress className={ classes.progress } /> }
              </div>
              <Button
                color="accentColor"
                onClick={ handleSave }
                className={ classes.saveBtn }>
                сохранить
              </Button>
              { error && <p className={ classes.inputError }>{ error }</p> }
            </div>
            <Button className={ classes.saveNewProductBtn } onClick={ () => setIsAddProductOpen(true) } color="accentColor">добавить продукт</Button>
            </div>
            <OrdersTable orders={orders} />
          </div>
          { isAddProductOpen &&
            <AddProductForm onSubmit={ handleSubmit }
              setImages={ setImages }
              images={ images }
              onClose={ () => setIsAddProductOpen(false) }
              initialValues={ INITIAL_PRODUCT } /> }
        </div>
      </div>
    </div>
  )
}

export default Admin

export async function getStaticProps() {
  const rate = await getRate();
  const orders = await getOrders();
  return { props: { currentRate: rate, orders }}
}
