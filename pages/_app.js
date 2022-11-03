import "styles/_misc.scss";
import 'react-notifications/lib/notifications.css';

import { rrfProps, store } from "config/firebase-config.js";

import App from "next/app";
import ContactMe from "components/ContactMe/ContactMe.js";
import Footer from "components/Footer/Footer.js";
import Head from "next/head";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { NotificationContainer } from 'react-notifications';
import PageChange from "components/PageChange/PageChange.js";
import { Provider } from 'react-redux'
import React from "react";
import ReactDOM from "react-dom";
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import Router from "next/router";
import viberImg from "assets/viber.svg";

Router.events.on("routeChangeStart", () => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const dashboardRoutes = [];

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }


  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta charset="utf-8" />
          <meta name="google-site-verification" content="FSGY0Gti00z1yOACCJdIHrNEHX9UQ1b0kEh6tJvVWV8" />
          <title>Установка кондиционеров в Киеве | Техническое обслуживание кондиционеров в Киеве | Air Master</title>

          <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
          <link rel="manifest" href="img/site.webmanifest" />

          <meta property="og:title" content="Установка кондиционеров в Киеве ❄️ Техническое обслуживание кондиционеров" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://air-master.com.ua/prices" />
          <meta property="og:image" content="https://air-master.com.ua/img/air-conditioner.png" />
          <meta property="og:site_name" content="AirMaster" />

          <script
            src="https://www.googletagmanager.com/gtag/js?id=G-WVCJL4V865"
            strategy="afterInteractive"
          />
          <script id="google-analytics" strategy="afterInteractive">
            { `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'G-WVCJL4V865')
          `}
          </script>
        </Head>
        <Provider store={ store }>
          <ReactReduxFirebaseProvider { ...rrfProps }>
            <div style={ { position: "relative" } }>
              <Header
                color="halfTransparent"
                routes={ dashboardRoutes }
                brand="Air Master"
                rightLinks={ <HeaderLinks /> }
                fixed
                changeColorOnScroll={ {
                  height: 500,
                  color: "white",
                } }
              />
              <Component { ...pageProps } />
              <Footer />
              <ContactMe viberImg={ viberImg } />
              <NotificationContainer/>
            </div>

          </ReactReduxFirebaseProvider>
        </Provider>
      </React.Fragment>
    );
  }
}
