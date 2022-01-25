import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit/components/contactMeStyles.js";

const useStyles = makeStyles(styles);

export default function ContactMe() {
  const [ isContactsOpen, toggleContacts ] = useState(true);
  const classes = useStyles({ open: isContactsOpen });

  return (
    <div className={ classes.wrapper }>
      <div className={ classes.contactBtn} onClick={ () => toggleContacts(!isContactsOpen) } />
      <Link href="tel:380665388579">
        <a className={ classes.phone }>
          <i className="fa fa-phone" aria-hidden="true"></i>
        </a>
      </Link>
      <Link title="Viber" href="viber://chat?number=+380505654859">
        <img className={ classes.viber } src="img/viber.svg" alt="Написать в Viber" />
      </Link>
    </div>
  );
}
