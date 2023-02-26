import { Field, reduxForm } from 'redux-form'
import { addOrder, sendEmail } from '../../services/services';

import Button from "components/CustomButtons/Button";
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from '@material-ui/core/Typography';
import { convertPriceToUAH } from "../../utils/utils";
import { createNewOrderEmail } from '../../emails/email';
import createNotification from "components/Notify/Notify";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/checkoutStyles";
import { useCart } from "../../context/shopping-cart";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

function Checkout({ rate }) {
  const classes = useStyles();
  const { cartItems, totalSum, cleanCart } = useCart();
  const router = useRouter();
  const user = useSelector(state => state.form?.checkout?.values);

  async function handleFormSubmit() {
    const order = {
      order: cartItems,
      user,
      rate,
      status: "new"
    }
    try {
      await addOrder(order);
      const email = createNewOrderEmail(order);
      await sendEmail(email);
      cleanCart();
      router.push("/checkout-success");
    } catch (error) {
      createNotification(error)
    }
  }

  return (
    <>
      <Typography variant="h5">Оформлення замовлення.</Typography>
      <div className={ classes.wrapper }>
        <Typography variant="body1">Ваші контактні дані.</Typography>
        <form>
          <GridContainer className={ classes.groupWrapper }>
            <GridItem xs={ 12 } md={ 4 }>
              <div className={ classes.inputWrapper }>
                <label className={ classes.label } htmlFor="lastName">Прізвище</label>
                <Field className={ classes.input } type="text" component="input" name='lastName' autocomplete="family-name" />
              </div>
            </GridItem>
            <GridItem xs={ 12 } md={ 4 }>
              <div className={ classes.inputWrapper }>
                <label className={ classes.label } htmlFor="firstName">Ім'я</label>
                <Field className={ classes.input } type="text" component="input" name='firstName' autocomplete="given-name" />
              </div>
            </GridItem>
            <GridItem xs={ 12 } md={ 4 }>
              <div className={ classes.inputWrapper }>
                <label className={ classes.label } htmlFor="phone">Мобільний телефон</label>
                <Field className={ classes.input } type="text" component="input" name='phone' />
              </div>
            </GridItem>
          </GridContainer>
          <Typography variant="body1">Замовлення:</Typography>
          <div className={ classes.orderWrapper }>
            <CheckoutTable cartItems={ cartItems } rate={ rate } />
          </div>
          <div className={ classes.total }>
            <Typography align="right">Разом: { convertPriceToUAH(totalSum, rate) || 0 } грн.</Typography>
          </div>
          <Typography variant="body1">Доставка:</Typography>
          <GridContainer className={ classes.groupWrapper }>
            <GridItem xs={ 12 } md={ 6 }>
              <div className={ classes.inputWrapper }>
                <label className={ classes.label } htmlFor="city">Місто</label>
                <Field className={ classes.input } type="text" component="input" name='city' />
              </div>
            </GridItem>
            <GridItem xs={ 12 } md={ 6 }>
              <div className={ classes.inputWrapper }>
                <label className={ classes.label } htmlFor="street">Вулиця</label>
                <Field className={ classes.input } type="text" component="input" name='street' />
              </div>
            </GridItem>
            <GridItem xs={ 12 } md={ 6 }>
              <div className={ classes.inputWrapper }>
                <label className={ classes.label } htmlFor="house">Будинок</label>
                <Field className={ classes.input } type="text" component="input" name='house' />
              </div>
            </GridItem>
            <GridItem xs={ 12 } md={ 6 }>
              <div className={ classes.inputWrapper }>
                <label className={ classes.label } htmlFor="apartment">Квартира</label>
                <Field className={ classes.input } type="text" component="input" name='apartment' />
              </div>
            </GridItem>
          </GridContainer>
        </form>
        <div className={ classes.checkout }>
          <Button onClick={ handleFormSubmit } color="accentColor">Замовлення підтверджую</Button>
        </div>
      </div>
    </>
  );
};

const CheckoutForm = reduxForm({
  form: 'checkout',
})(Checkout)

export default CheckoutForm;
