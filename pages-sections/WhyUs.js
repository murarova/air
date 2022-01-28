import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link"

// @material-ui/icons
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BuildIcon from '@material-ui/icons/Build';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import GavelIcon from '@material-ui/icons/Gavel';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "styles/jss/nextjs-material-kit/pages/mainPageSections/whyUsStyles.js";

const useStyles = makeStyles(styles);

export default function WhyUs() {
  const classes = useStyles();
  return (
    <div className={ classes.section }>
      <GridContainer justifyContent="center">
        <GridItem xs={ 12 }>
          <h2 className={ classes.title }>С нами вы экономите время!</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={ 12 }>
            <img className={ classes.img } src="img/steps.png"></img>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
