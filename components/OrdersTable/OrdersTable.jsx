import CheckoutTable from "../CheckoutTable/CheckoutTable";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { convertPriceToUAH } from "utils/utils";
import { deleteOrder } from "../../services/services";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment"
import styles from "styles/components/ordersTableStyles";
import { useRouter } from 'next/router'

const useStyles = makeStyles(styles);

function OrdersTable({ orders }) {
  const classes = useStyles();
  const router = useRouter();

  async function handleDeleteOrder(id) {
    await deleteOrder(id)
    setTimeout(() => {
      router.replace(router.asPath);
    }, 500);
  }

  function getTotalSum(cartItems) {
    return cartItems.reduce((acc, item) => acc + item.amount * item.price, 0);
  }

  function sortOrders() {
    return orders.sort(function (a, b) {
      return b.date - a.date;
    }) || [];
  }

  return (
    <>
      { sortOrders().map(({ orderNumber, id, order, rate, user, status, date }) => <div className={ classes.order } key={ id }>
        <IconButton className={ classes.deleteBtn } onClick={ () => handleDeleteOrder(id) }>
          <DeleteIcon />
        </IconButton>
        <Typography variant="h6">Замовлення №: { orderNumber }</Typography>
        <Typography>Дата: { moment(date).format("D.MM.YYYY, HH:mm") }</Typography>
        <Typography>Замовник: { user.firstName } { user.lastName }</Typography>
        <Typography>Адреса: місто: { user.city }, вул: { user.street }, буд: { user.house },  кв: { user.apartment} </Typography>
        <Typography>Телефон: { user.phone }</Typography>
        <Typography>Статус: { status === "new" ? "Новий" : status }</Typography>
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
