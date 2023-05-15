import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "styles/components/infoBanner";

const useStyles = makeStyles(styles);

export default function InfoBanner({ titleColor }) {
  const classes = useStyles();

  return (
    <div className={ classes.notification }>
      <h6 style={{ color: titleColor }} className={ classes.notificationTitle }>При покупці кондиціонера:</h6>
      <p><strong>Безкоштовна</strong> доставка по м.Київ</p>
      <p>Стандартний монтаж - <strong>1500 грн.</strong></p>
      <p>Навішування блоків на готову магістраль - <strong>безкоштовно</strong></p>
    </div>
  );
}
