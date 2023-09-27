import Link from "next/link";
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/contactMeStyles.js";

const useStyles = makeStyles(styles);

export default function ContactMe({ viberImg, telegramImg }) {
  const classes = useStyles();

  return (
    <div className={ classes.wrapper }>
      <Link href="tel:+380960501129" className={ classes.phone }>
        <i className="fa fa-phone" aria-hidden="true"></i>
      </Link>
      <Link title="Viber" href="viber://chat?number=%2B380665388579">
        <img className={ classes.viber } src={ viberImg } alt="Написати у Viber" />
      </Link>
      <Link title="Telegram" href="https://t.me/+380665388579">
        <img className={ classes.telegram } src={ telegramImg } alt="Написати у Telegram" />
      </Link>
    </div>
  );
}
