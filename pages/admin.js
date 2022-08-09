import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase"

import Button from "components/CustomButtons/Button.js";
import Router from 'next/router'
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(styles);

const Admin = () => {
  const firebase = useFirebase()
  const auth = useSelector((state) => state.auth)
  const isLoggedIn = isLoaded(auth) && !isEmpty(auth)
  const classes = useStyles();

  useEffect(() => {
    !isLoggedIn && Router.push("/login")
  }, [ isLoggedIn ])

  function renderPage() {
    return <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <h1>Your Profile</h1>
          <Button
            color="info"
            onClick={ firebase.logout }>
            Logout
          </Button>
        </div>
      </div>
    </div>
  }


  return (
    <>
      { !isLoaded(auth)
        ? <p>Loading...</p>
        : renderPage() }
    </>
  )
}

export default Admin
