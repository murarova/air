import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from "components/CustomButtons/Button.js";
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
      { cartItems.length === 0 ?
        <div className={ classes.iconWrapper }>
          <AddShoppingCartIcon className={ classes.cartIcon }  />
          <Typography variant="h5">Кошик порожній.</Typography>
        </div>
        :
        <>
          <Typography variant="h5">Кошик</Typography>
          <ShopingCartTable cartItems={ cartItems }
            rate={ rate }
            addToCart={ addToCart }
            removeFromCart={ removeFromCart } />
          <div className={ classes.cartFooter }>
            <p className={ classes.total }>Разом: { convertPriceToUAH(totalSum, rate) || 0 } грн.</p>
            <Button className={ classes.checkoutButton } onClick={ handleCheckoutClick } color="accentColor">Оформити</Button>
          </div>
        </>
      }
    </>
  );
};
