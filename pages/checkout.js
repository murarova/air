import Checkout from '../components/Checkout/Checkout';
import Head from "next/head";
import classNames from "classnames";
import { getRate } from "../services/services";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function CheckoutPage({ rate }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Оформлення замовлення | Air Master</title>
        <meta name="description" content="Оформлення замовлення на кондиционер в Києві" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <Checkout rate={rate} />
          </div>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  const rate = await getRate();
  return { props: { rate }}
}
