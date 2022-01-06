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
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";

import styles from "styles/jss/nextjs-material-kit/pages/mainPageSections/serviceStyles.js";

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
      <div>
        <GridContainer>
          <GridItem xs={ 12 } sm={ 3 } md={ 3 } lg={ 3 }>
            <Card className={ classes.card }>
              <Link href="/mounting">
                <a>
                  <InfoArea
                    title="Монтаж кондиционеров"
                    description=""
                    icon={ AcUnitIcon }
                    iconColor="info"
                    vertical
                  />
                </a>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 12 } sm={ 3 } md={ 3 } lg={ 3 }>
            <Card className={ classes.card }>
              <Link href="/dismantling">
                <a>
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
          <GridItem xs={ 12 } sm={ 3 } md={ 3 } lg={ 3 }>
            <Card className={ classes.card }>
              <Link href="/maintenance">
                <a>
                  <InfoArea
                    title="ТO кондиционеров"
                    description=""
                    icon={ BuildIcon }
                    iconColor="info"
                    vertical
                  />
                </a>
              </Link>
            </Card>
          </GridItem>
          <GridItem xs={ 12 } sm={ 3 } md={ 3 } lg={ 3 }>
            <Card className={ classes.card }>
              <Link href="/trail">
                <a>
                  <InfoArea
                    title="Закладка трасс"
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
