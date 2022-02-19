import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import BuildIcon from '@material-ui/icons/Build';

import styles from "styles/jss/nextjs-material-kit/pages/mainPageSections/whyUsStyles.js";

const useStyles = makeStyles(styles);

export default function WhyUs() {
  const classes = useStyles();
  return (
    <div className={ classes.section }>
      <GridContainer justifyContent="center">
        <GridItem xs={ 12 } sm={ 9 } md={ 8 }>
          <h2 className={ classes.title }>С нами установить кондиционер просто.</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <div className={ classes.decor }>
                <div className={ classes.number }>
                <img className={ classes.image } src="img/1.png"/>
                </div>
              </div>
              <div className={ classes.cardContect }>
                <h3 className={ classes.mainTitle }>Выбор кондиционера</h3>
                <p>Подбираем модель кондиционера  исходя из вашего бюджета и потребностей.</p>
              </div>
            </Card>
          </GridItem>
          <GridItem xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <div className={ classes.decor }>
                <div className={ classes.number }>
                <img className={ classes.image } src="img/2.png"/>
                </div>
              </div>
              <div className={ classes.cardContect }>
                <h3 className={ classes.mainTitle }>Доставка оборудования</h3>
                <p>Мы закупим  и доставим все необходимое оборудование для монтажа кондиционера.</p>
              </div>
            </Card>
          </GridItem>
          <GridItem xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <div className={ classes.decor }>
                <div className={ classes.number }>
                <img className={ classes.image } src="img/3.png"/>
                </div>
              </div>
              <div className={ classes.cardContect }>
                <h3 className={ classes.mainTitle }>Установка кондиционера</h3>
                <p>Выбираем дату установки и монтируем кондиционер.</p>
              </div>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>

  );
}
