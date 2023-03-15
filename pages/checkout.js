import { getOrderCounter, getRate } from "../services/services";

import Checkout from '../components/Checkout/Checkout';
import Head from "next/head";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function CheckoutPage({ rate, orderCounter }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Оформлення замовлення | Air Master</title>
        <meta name="description" content="Оформлення замовлення на кондіціонер у Києві" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <Checkout rate={rate} orderCounter={orderCounter} />
          </div>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  const rate = await getRate();
  const orderCounter = await getOrderCounter();
  return { props: { rate, orderCounter }}
}
