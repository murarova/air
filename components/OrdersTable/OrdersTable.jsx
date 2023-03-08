import CheckoutTable from "../CheckoutTable/CheckoutTable";
import Typography from '@material-ui/core/Typography';
import { convertPriceToUAH } from "utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/ordersTableStyles";

const useStyles = makeStyles(styles);

function OrdersTable({ orders }) {
  const classes = useStyles();

  function getTotalSum(cartItems) {
    return cartItems.reduce((acc, item) => acc + item.amount * item.price, 0);
  }

  return (
    <>
      { orders.map(({ orderNumber, id, order, rate, user, status }) => <div className={ classes.order } key={ id }>
        <Typography variant="h6">Замовлення №: { orderNumber }</Typography>
        <Typography>Замовник: { user.firstName } { user.lastName }</Typography>
        <Typography>Адреса: { user.city }, { user.street } </Typography>
        <Typography>Телефон: { user.phone }</Typography>
        <Typography>Статус: { status }</Typography>
        <Typography className={ classes.marginBottom }>Курс: { rate }</Typography>
        <CheckoutTable cartItems={ order } rate={ rate } />
        <div>
          <Typography align="right">Разом: { convertPriceToUAH(getTotalSum(order), rate) || 0 } грн.</Typography>
        </div>
      </div>
      ) }
    </>
  );
};

export default OrdersTable;
