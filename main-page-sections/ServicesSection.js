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
          <h2 className={ classes.title }>Наши услуги.</h2>
        </GridItem>
      </GridContainer>
      <div className={ classes.sectionContent }>
        <GridContainer spacing={ 4 }>
          <GridItem xs={ 12 } sm={ 4 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <Link href="/products">
                <a className={ classes.serviceLink }>
                  <InfoArea
                    title="Продажа кондиционеров"
                    description=""
                    icon={ CallToActionIcon }
                    iconColor="info"
                    vertical
                  />
                </a>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 6 } sm={ 4 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <Link href="/mounting">
                <a className={ classes.serviceLink }>
                  <InfoArea
                    title="Монтаж кондиционеров"
                    description=""
                    icon={ AcUnitIcon }
                    iconColor="infoColor"
                    vertical
                  />
                </a>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 6 } sm={ 4 } md={ 4 } lg={ 4 }>
            <Card className={ classes.card }>
              <Link href="/maintenance">
                <a className={ classes.serviceLink }>
                  <InfoArea
                    title="Техническое обслуживание"
                    description=""
                    icon={ BuildIcon }
                    iconColor="info"
                    vertical
                  />
                </a>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 6 } sm={ 6 } md={ 6 } lg={ 6 }>
            <Card className={ classes.card }>
              <Link href="/dismantling">
                <a className={ classes.serviceLink }>
                  <InfoArea
                    title="Демонтаж кондиционеров"
                    description=""
                    icon={ PermDataSettingIcon }
                    iconColor="info"
                    vertical
                  />
                </a>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 6 } sm={ 6 } md={ 6 } lg={ 6 }>
            <Card className={ classes.card }>
              <Link href="/trail">
                <a className={ classes.serviceLink }>
                  <InfoArea
                    title="Закладка трасс на этапе ремонта"
                    description=""
                    icon={ GavelIcon }
                    iconColor="info"
                    vertical
                  />
                </a>
              </Link>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
