import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/contactMeStyles.js";

const useStyles = makeStyles(styles);

export default function ContactMe({ viberImg }) {
  const classes = useStyles();

  return (
    <div className={ classes.wrapper }>
      <Link href="tel:380665388579">
        <a className={ classes.phone }>
          <i className="fa fa-phone" aria-hidden="true"></i>
        </a>
      </Link>
      <Link title="Viber" href="viber://chat?number=+380665388579">
        <img className={ classes.viber } src={ viberImg } alt="Написать в Viber" />
      </Link>
    </div>
  );
}
