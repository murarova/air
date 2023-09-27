import 'react-phone-input-2/lib/style.css'
import 'react-notifications/lib/notifications.css';
import "styles/_misc.scss";

import { rrfProps, store } from "config/firebase-config.js";
import { useEffect, useState } from "react";

import { AuthProvider } from "../context/auth";
import { CartProvider } from "../context/shopping-cart";
import ContactMe from "components/ContactMe/ContactMe.js";
import Footer from "components/Footer/Footer.js";
import Head from "next/head";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { NotificationContainer } from 'react-notifications';
import PageChange from "components/PageChange/PageChange.js";
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import { Provider } from 'react-redux'
import React from "react";
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import Script from 'next/script'
import telegramImg from "assets/telegram.svg";
import { useRouter } from 'next/router'
import viberImg from "assets/viber.svg";

const dashboardRoutes = [];
const authRequired = [ '/admin' ]

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="1uCBWF5J3KwQiE768o7d_hCBNeiHr1lhrTUxcsDOrUo" />
        <title>Продаж кондиціонерів у Києві | Air Master</title>

        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
        <link rel="manifest" href="img/site.webmanifest" />

        <meta property="og:title" content="Продаж кондиціонерів у Києві" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://air-master.top/products" />
        <meta property="og:image" content="https://air-master.top/img/air-conditioner.png" />
        <meta property="og:site_name" content="AirMaster" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WKYVT27R46"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        { `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WKYVT27R46');
        `}
      </Script>
      <Provider store={ store }>
        <ReactReduxFirebaseProvider { ...rrfProps }>
          <AuthProvider>
            <CartProvider>
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
                { authRequired.includes(router.pathname)
                  ? <ProtectedRoute>
                    <Component { ...pageProps } />
                  </ProtectedRoute>
                  : <Component { ...pageProps } />
                }
                <Footer />
                <ContactMe viberImg={ viberImg } telegramImg={telegramImg} />
                <NotificationContainer />
              </div>
            </CartProvider>
          </AuthProvider>
        </ReactReduxFirebaseProvider>
      </Provider>
      { loading && <PageChange /> }
    </React.Fragment>
  );
}
