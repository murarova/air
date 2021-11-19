import React from "react";
import Router from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/sectionStyles.js";

const useStyles = makeStyles(styles);

export default function Section({ id, position, children, title, image, link }) {
  const classes = useStyles();
  const imageClassName = "wrap" + position;
  const handleBtnClick = () => Router.push(link);

  return (
    <div id={ id } className={ classes.section } style={ { color: "black" } }>
      <GridContainer justify="center">
        <GridItem xs={ 12 } sm={ 12 } md={ 8 }>
          <h2 className={ classes.title }>{ title }</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridItem xs={ 12 } sm={ 12 } md={ 12 }>
          <div className={ classes.mounting }>
            <div className={ classes.position }>
              <img className={ classes[ imageClassName ] } src={ image } />
            </div>
            <div className={ classes.sectionText }>
              { children }
              <div className={ classes.btnWrapper }>
                <Button onClick={ handleBtnClick } color="info">Стоимость</Button>
              </div>
            </div>
          </div>
        </GridItem>
      </div>
    </div>
  );
}
