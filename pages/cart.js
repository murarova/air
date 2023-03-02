import Cart from '../components/Cart/Cart';
import Head from "next/head";
import classNames from "classnames";
import { getRate } from "../services/services";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function CartPage({ rate }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Корзина | Air Master</title>
        <meta name="description" content="Продажа кондиционеров в Киеве ✅ Гарантия ❗  Лучшие цены 💰" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <Cart rate={rate} />
          </div>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  const rate = await getRate();
  return { props: { rate }, revalidate: 60}
}
