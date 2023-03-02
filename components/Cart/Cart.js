import Button from "components/CustomButtons/Button.js";
import { CartItem } from "../CartItem/CartItem";
import ShopingCartTable from "../ShopingCartTable/ShopingCartTable";
import Typography from '@material-ui/core/Typography';
import { convertPriceToUAH } from "../../utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/cartStyle";
import { useCart } from "../../context/shopping-cart";
import { useRouter } from 'next/router'

const useStyles = makeStyles(styles);

export default function Cart({ rate }) {
  const classes = useStyles();
  const router = useRouter()
  const { cartItems, addToCart, removeFromCart, totalSum } = useCart();

  function handleCheckoutClick() {
    router.push("/checkout");
  }
  return (
    <>
      { cartItems.length === 0 ? <Typography variant="h5">Корзина пустая.</Typography> :
        <>
          <Typography variant="h5">Корзина</Typography>
          <ShopingCartTable cartItems={ cartItems }
            rate={ rate }
            addToCart={ addToCart }
            removeFromCart={ removeFromCart } />
          <div className={ classes.cartFooter }>
            <Typography className={classes.total} variant="h5">Разом: { convertPriceToUAH(totalSum, rate) || 0 } грн.</Typography>
            <Button onClick={ handleCheckoutClick } color="accentColor">Оформити</Button>
          </div>
        </>
      }

    </>
  );
};
