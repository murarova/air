import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";
import { styled } from '@material-ui/styles';
import styles from "styles/pages/pages.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Router from 'next/router'

const Input = styled(TextField)(() => ({
  fontFamily: '"PT Mono", monospace',
  marginBottom: "20px",
}));

export default function LoginPage() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const firebase = useFirebase()
  const auth = useSelector((state) => state.auth)
  const isLoggedIn = isLoaded(auth) && !isEmpty(auth)

  const [ credentials, setCredentials ] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    isLoggedIn && Router.push("/admin")
  }, [ isLoggedIn ])

  const [ error, setError ] = useState(null)

  const handleChange = (event) => {
    event.persist()
    setCredentials(prev => ({ ...prev, [ event.target.id ]: event.target.value }))
  }

  async function loginWithEmail() {
    try {
      await firebase.login(credentials)
    } catch (error) {
      setError(error.message)
    }
  }

  function renderLoginPage() {
    return (
      <div className={ classes.login }>
        <Input
          required
          id="email"
          value={ credentials.email }
          onChange={ handleChange }
          label="Login"
          autoComplete="e-mail"
        />
        <Input
          required
          value={ credentials.password }
          type="password"
          id="password"
          label="Password"
          autoComplete="current-password"
          onChange={ handleChange }
        />
        <Button onClick={ loginWithEmail } color="accentColor">login</Button>
        { error && <p>{ error }</p> }
      </div>
    )
  }

  return <Container maxWidth="md">
    { !isLoaded(auth)
      ? <p>Loading...</p>
      : <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            { renderLoginPage() }
          </div>
        </div>
      </div>
    }
  </Container>
}

