import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/mainPage.js";

// Sections for this page
import ServicesSection from "pages-sections/ServicesSection.js";
import Mounting from "pages-sections/Mounting.js";
import Maintenance from "pages-sections/Maintenance.js";
import TrailInstallation from "pages-sections/TrailInstallation.js";
import Dismantling from "pages-sections/Dismantling.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={ dashboardRoutes }
        brand="AirMaster"
        rightLinks={ <HeaderLinks /> }
        fixed
        changeColorOnScroll={ {
          height: 400,
          color: "white",
        } }
        { ...rest }
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={ classes.container }>
          <GridContainer>
            <GridItem xs={ 12 } sm={ 12 } md={ 6 }>
              <h1 className={ classes.title }>Самые лучшие кондиционеры.</h1>
              <h4>
                Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения направлений прогрессивного развития.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Наши работы
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={ classNames(classes.main, classes.mainRaised) }>
        <div className={ classes.container }>
          <ServicesSection />
          <Mounting />
          <Maintenance />
          <TrailInstallation />
          <Dismantling />
        </div>
      </div>
      <Footer />
    </div>
  );
}
