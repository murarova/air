import { Field, reduxForm } from 'redux-form'
import { addOrder, sendEmail, setOrderCounter } from '../../services/services';

import Button from "components/CustomButtons/Button";
import CheckoutTable from 'components/CheckoutTable/CheckoutTable';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PhoneInput from 'react-phone-input-2'
import Typography from '@material-ui/core/Typography';
import { convertPriceToUAH } from "utils/utils";
import { createNewOrderEmail } from 'emails/email';
import createNotification from "components/Notify/Notify";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/checkoutStyles";
import { useCart } from "context/shopping-cart";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);
const required = value => value ? undefined : 'Це поле обов\'язкове';

const renderField = ({ input, required, phone, classes, label, className, type, meta: { touched, error, warning } }) => (
  <div>
    <label className={ classes.inputLabel }>{ label }
      { required && <span className={ classes.asterisk }>&#65121;</span> }
    </label>
    <div className={ classes.inputWrapper }>
      { phone
        ? <PhoneInput  { ...input } onlyCountries={['ua']} placeholder="+380 (50) 112 12 12" disableDropdown country={'ua'} />
        : <input className={ className } { ...input } type={ type } /> }
      { touched && ((error && <span className={ classes.error }>{ error }</span>) || (warning && <span>{ warning }</span>)) }
    </div>
  </div>
)

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Це поле обов\'язкове'
  }
  if (!values.phone) {
    errors.phone = 'Це поле обов\'язкове'
  } else if(values.phone.length < 12) {
    errors.phone = 'Невірний формат'
  }
  return errors
}

function Checkout({ rate, orderCounter, touch }) {
  const classes = useStyles();
  const { cartItems, totalSum, cleanCart } = useCart();
  const router = useRouter();
  const user = useSelector(state => state.form?.checkout?.values);
  const validationErrors = useSelector(state => state.form?.checkout?.syncErrors);
  
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (validationErrors) {
      touch(...Object.keys(validationErrors));
      createNotification("error", "Заповніть, будь ласка, обов'язкові поля");
      return
    }
  
    const orderNumber = Number(orderCounter) + 1;
    const order = {
      order: cartItems,
      user,
      rate,
      status: "new",
      orderNumber,
      date: Date.now()
    }
    try {
      await addOrder(order);
      const email = createNewOrderEmail(order);
      await sendEmail(email, orderNumber);
      await setOrderCounter(orderNumber)
      router.push("/checkout-success");
      cleanCart();
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <>
      <Typography variant="h5">Оформлення замовлення.</Typography>
      <div className={ classes.wrapper }>
        <Typography variant="body1">Ваші контактні дані.</Typography>
        <form onSubmit={ handleFormSubmit }>
          <GridContainer className={ classes.groupWrapper }>
            <GridItem xs={ 12 } md={ 4 }>
              <Field className={ classes.input } label="Прізвище" type="text" component={ renderField } classes={ classes } name='lastName' autoComplete="family-name" />
            </GridItem>
            <GridItem xs={ 12 } md={ 4 }>
              <Field validate={ [ required ] } classes={ classes } label="Ім'я" className={ classes.input } type="text" component={ renderField } required name='firstName' autoComplete="given-name" />
            </GridItem>
            <GridItem xs={ 12 } md={ 4 }>
              <Field className={ classes.input } classes={ classes } validate={ [ required ] } label="Tелефон" type="tel" component={ renderField } required phone name='phone' />
            </GridItem>
          </GridContainer>
          <Typography variant="body1">Замовлення:</Typography>
          <div className={ classes.orderWrapper }>
            <CheckoutTable cartItems={cartItems} rate={ rate } />
          </div>
          <div className={ classes.total }>
            <Typography align="right">Разом: { convertPriceToUAH(totalSum, rate) || 0 } грн.</Typography>
          </div>
          <Typography variant="body1">Доставка:</Typography>
          <GridContainer className={ classes.groupWrapper }>
            <GridItem xs={ 12 } md={ 6 }>
              <Field className={ classes.input } classes={ classes } component={ renderField } type="text" label="Місто" name='city' />
            </GridItem>
            <GridItem xs={ 12 } md={ 6 }>
              <Field className={ classes.input } classes={ classes } component={ renderField } label="Вулиця" type="text" name='street' />
            </GridItem>
            <GridItem xs={ 12 } md={ 6 }>
              <Field className={ classes.input } classes={ classes } component={ renderField } label="Будинок" type="text" name='house' />
            </GridItem>
            <GridItem xs={ 12 } md={ 6 }>
              <Field className={ classes.input } classes={ classes } component={ renderField } label="Квартира" type="text" name='apartment' />
            </GridItem>
          </GridContainer>
          <div className={ classes.checkout }>
            <Button type="submit" color="accentColor">Замовлення підтверджую</Button>
          </div>
        </form>
      </div>
    </>
  );
};

const CheckoutForm = reduxForm({
  form: 'checkout',
  validate
})(Checkout)

export default CheckoutForm;
