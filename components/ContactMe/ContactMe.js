import Link from "next/link";
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/contactMeStyles.js";

const useStyles = makeStyles(styles);

export default function ContactMe({ viberImg }) {
  const classes = useStyles();

  return (
    <div className={ classes.wrapper }>
      <Link href="tel:380960501129" className={ classes.phone }>
        <i className="fa fa-phone" aria-hidden="true"></i>
      </Link>
      <Link title="Viber" href="viber://chat?number=+380665388579" legacyBehavior>
        <img className={ classes.viber } src={ viberImg } alt="Написать в Viber" />
      </Link>
    </div>
  );
}
