/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={ classes.list }>
      <ListItem className={ classes.listItem }>
        <Link href="/delivery">
          <a className={ classes.navLink }>Доставка и оплата</a>
        </Link>
      </ListItem>
      <ListItem className={ classes.listItem }>
        <Link href="mailto:murarovvitalij@gmail.com" target="_blank">
          <a className={ classes.navLink } >e-mail: murarovvitalij@gmail.com</a>
        </Link>
      </ListItem>

      <ListItem className={ classes.listItem }>
        <Link href="tel:380665388579">
          <a className={ classes.navLink }>Тел: +38 (066)-538-85-79</a>
        </Link>
      </ListItem>
      
    </List>
  );
}
