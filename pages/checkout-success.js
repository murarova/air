import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { accentColor } from '../styles/default-styles';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

export default function CheckoutSuccess() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();


  return <Container maxWidth="md">
    { <div className={ classes.wrapper }>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <div className={ classes.сheckoutSuccessWrapper }>
            <CheckCircleIcon style={{ color: accentColor }} className={ classes.сheckoutSuccessIcon } />
            <Typography className={ classes.сheckoutSuccessTitle } align="center" variant="h4">Дякуємо за замовлення.</Typography>
            <Typography className={ classes.сheckoutSuccessTitle } align="center" variant="body1">Наш менеджер зв'яжеться з вами найближчим часом.</Typography>
          </div>
        </div>
      </div>
    </div>
    }
  </Container>
}

