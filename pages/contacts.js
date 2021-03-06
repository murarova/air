import React from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Card from "components/Card/Card.js";

import styles from "styles/pages/pages.js";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ContactsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Head>
        <title>Контакты | Air Master</title>
        <meta name="description" content="Монтаж кондиционеров, техническое обслуживание кондиционеров, прокладка трасс для кондиционеров, демонтаж кондиционеров, продажа кондиционеров" />
      </Head>
      <div style={ { color: "dark" } }>
        <Header
          color="white"
          routes={ dashboardRoutes }
          brand="Air Master"
          rightLinks={ <HeaderLinks /> }
          fixed
          { ...rest }
        />
        <div className={ classNames(classes.main, classes.mainRaised) }>
          <div className={ classes.pageWithBackground }>
              <h2>Контакты</h2>
              <p className={ classes.contactsItemCity }>г.Киев</p>
              <Link href="mailto:murarovvitalij@gmail.com">
                <a className={ classes.contactsItem } target="_blank" >
                  <i className={ classes.socialIcons + " fab fa fa-envelope" } aria-hidden="true" />
                  <span className={ classes.email } >e-mail: murarovvitalij@gmail.com</span>
                </a>
              </Link>
              <Link href="tel:380665388579">
                <a className={ classes.contactsItem }>
                  <i className={ classes.socialIcons + " fab fa fa-phone-square" } aria-hidden="true" />
                  <span className={ classes.phone } >Тел: +38 (066)-538-85-79</span>
                </a>
              </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}


