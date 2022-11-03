import { isEmpty, isLoaded, useFirebaseConnect } from "react-redux-firebase"

import AddProductForm from "../components/AddProduct/AddProdact";
import Button from "components/CustomButtons/Button.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from 'react';
import Router from 'next/router'
import TextField from '@material-ui/core/TextField';
import classNames from "classnames";
import createNotification from "../components/Notify/Notify";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";
import { useEffect } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useState } from "react";

const useStyles = makeStyles(styles);
const INITIAL_PRODUCT = {
  "articleNumber": "",
  "brand": "",
  "description": "",
  "images": [],
  "price": "",
  "specification": {
    "inner": [],
    "outer": [],
  },
  "title": ""
}


const Admin = () => {
  useFirebaseConnect([ { path: 'rate' } ])
  const auth = useSelector((state) => state.firebase.auth)
  const currentRate = useSelector((state) => state.firebase.data.rate)
  const isLoggedIn = isLoaded(auth) && !isEmpty(auth)
  const classes = useStyles();
  const firebase = useFirebase()

  const [ rate, setRate ] = useState(currentRate);
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isAddProductOpen, setIsAddProductOpen ] = useState(false);
  const [ images, setImages ] = useState([]);

  const handleChange = (event) => {
    setRate(event.target.value);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/login")
    }
  }, [ isLoggedIn ])

  function handleSave() {
    if (!rate) {
      setError("Rate field can't be empty")
      return
    }
    setIsLoading(true)
    setError(null)
    firebase.set("rate", rate, () => setTimeout(() => {
      setIsLoading(false)
    }, 500))
  }

  async function handleSubmit(values) {
    try {
      const newProduct = {
        ...values,
        images
      }
      await firebase.pushWithMeta('products', newProduct);
      createNotification("success", "Товар успешно добавлен")
      setIsAddProductOpen(false)
      setImages([])
    } catch (error) {
      createNotification("error", error)
    }
  }

  return (
    isLoaded(auth) && isLoaded(currentRate) && <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <div className={ classes.adminWrapper }>
            <div className={ classes.rateContainer }>
              <p className={ classes.rateName }>Курс USD/UAH: </p>
              <div className={ classes.progressWrapper }>
                <TextField name="rate" defaultValue={ currentRate } value={ rate } onChange={ handleChange } size="small" variant="outlined" />
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
            <Button onClick={ () => setIsAddProductOpen(true) } color="accentColor">добавить продукт</Button>
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
