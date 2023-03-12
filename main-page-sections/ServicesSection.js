import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link"

// @material-ui/icons
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import BuildIcon from '@material-ui/icons/Build';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import GavelIcon from '@material-ui/icons/Gavel';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";

import styles from "styles/main-page-sections/serviceStyles.js";

const useStyles = makeStyles(styles);

export default function ServicesSection() {
  const classes = useStyles();
  return (
    <div className={ classes.section }>
      <GridContainer justifyContent="center">
        <GridItem xs={ 12 } sm={ 6 } md={ 8 }>
          <h2 className={ classes.title }>Наші послуги.</h2>
        </GridItem>
      </GridContainer>
      <div className={ classes.sectionContent }>
        <GridContainer spacing={ 4 }>
          <GridItem xs={ 12 } sm={ 4 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <Link href="/products" className={ classes.serviceLink }>

                <InfoArea
                  title="Продаж кондиціонерів"
                  description=""
                  icon={ CallToActionIcon }
                  iconColor="info"
                  vertical
                />

              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 6 } sm={ 4 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <Link href="/mounting" className={ classes.serviceLink }>

                <InfoArea
                  title="Монтаж кондиціонерів"
                  description=""
                  icon={ AcUnitIcon }
                  vertical
                />

              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 6 } sm={ 4 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <Link href="/maintenance" className={ classes.serviceLink }>

                <InfoArea
                  title="Технічне обслуговування"
                  description=""
                  icon={ BuildIcon }
                  iconColor="info"
                  vertical
                />

              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 6 } sm={ 6 } md={ 6 } lg={ 6 }>
            <Card className={ classes.card }>
              <Link href="/dismantling" className={ classes.serviceLink }>

                <InfoArea
                  title="Демонтаж кондиціонерів"
                  description=""
                  icon={ PermDataSettingIcon }
                  iconColor="info"
                  vertical
                />

              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 6 } sm={ 6 } md={ 6 } lg={ 6 }>
            <Card className={ classes.card }>
              <Link href="/trail" className={ classes.serviceLink }>

                <InfoArea
                  title="Закладка трас на етапі ремонту"
                  description=""
                  icon={ GavelIcon }
                  iconColor="info"
                  vertical
                />

              </Link>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
