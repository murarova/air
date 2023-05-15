import { getProducts, getRate } from "../../services/services";
import { useMemo, useState } from "react";

import BrandsList from "components/BrandsList/BrandsList";
import Button from "components/CustomButtons/Button";
import CloseIcon from '@material-ui/icons/Close';
import Filter from "components/Filter/Filter";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Head from "next/head";
import InfoBanner from "components/InfoBanner/InfoBanner";
import Product from "components/Product/Product";
import {
  accentColor
} from "styles/default-styles.js";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/pages/pages.js";

const useStyles = makeStyles(styles);

export default function ProductsPage({ products, rate }) {
  const classes = useStyles();
  const [ filter, setFilter ] = useState({
    price: null,
    brand: null
  })

  function handlePriceFilter(price) {
    setFilter({ ...filter, price })
  }

  function handleBrandFilter(brand) {
    setFilter({ ...filter, brand })
  }

  function getFilteredProducts() {
    let filteredProducts = [ ...products ]
    if (filter.price) {
      filteredProducts.sort((a, b) => filter.price === "desc"
        ? Number(a.price) - Number(b.price)
        : Number(b.price) - Number(a.price))
    }
    if (filter.brand) {
      filteredProducts = filteredProducts.filter(({ brand }) => filter.brand.trim().toLowerCase() === brand.trim().toLowerCase())
    }
    return filteredProducts
  }

  function handleBrandFilterDelete() {
    setFilter({
      ...filter,
      brand: null
    })
  }

  const filteredProducts = useMemo(() => getFilteredProducts(), [ filter ]);

  return (
    <>
      <Head>
        <title>Продаж кондиціонерів у Києві | Air Master</title>
        <meta name="description" content="Продаж кондиціонерів у Києві ✅ Гарантия ❗  Найкращі ціни 💰" />
      </Head>
      <div className={ classes.wrapper }>
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.container }>
            <GridContainer justifyContent="space-between">
              <GridItem xs={ 12 } sm={ 6 } className={ classes.filter } >
                <h2 className={ classes.catalogTitle }>Каталог</h2>
              </GridItem>
              <GridItem xs={ 12 } sm={ 6 } className={ classes.filter }>
                <Filter handleFilter={ ({ value }) => handlePriceFilter(value) } />
              </GridItem>
            </GridContainer>
            <GridContainer justifyContent="flex-end">
              <GridItem xs={ 12 } sm={ 6 }>
                <InfoBanner titleColor={accentColor} />
              </GridItem>
            </GridContainer>
            <GridContainer className={ classes.brandFilter }>
              { filter.brand &&
                <GridItem xs={ 12 } className={ classes.filterValues }>
                  <h6 className={ classes.filterTitle }>Обрано { filteredProducts.length } товарів</h6>
                  <div className={ classes.filterValue }>
                    <span className={ classes.filterName }>{ filter.brand.toUpperCase() }</span>
                    <span className={ classes.deleteFilter } onClick={ handleBrandFilterDelete }><CloseIcon className={ classes.deleteIcon } /></span>
                  </div>
                </GridItem> }
              <GridItem xs={ 12 }>
                <BrandsList onBrandClick={ handleBrandFilter } />
              </GridItem>
            </GridContainer>
            <div className={ classes.sectionContent }>
              { isEmpty(filteredProducts)
                ? <GridItem xs={ 12 } className={ classes.filter } >
                  <h2 className={ classes.subTitle }>Нічого не знайдено</h2>
                </GridItem>
                : <GridContainer spacing={ 4 }>
                  { filteredProducts.map((product) =>
                    <GridItem key={ product.id } xs={ 12 } sm={ 6 } md={ 6 } lg={ 4 }>
                      <Product product={ product } rate={ rate } />
                    </GridItem>) }
                </GridContainer> }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  const rate = await getRate();
  return { props: { products, rate } }
}
