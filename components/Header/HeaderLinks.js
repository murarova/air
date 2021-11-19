/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={ classes.list }>
      <ListItem className={ classes.listItem }>
        <Link href="/services">
          <a className={ classes.navLink }>Услуги</a>
        </Link>
      </ListItem>
      <ListItem className={ classes.listItem }>
        <Link href="/prices">
          <a className={ classes.navLink }>Прайс-лист</a>
        </Link>
      </ListItem>
      <ListItem className={ classes.listItem }>
        <Link href="/delivery">
          <a className={ classes.navLink }>Доставка и оплата</a>
        </Link>
      </ListItem>
      <ListItem className={ classes.listItem }>
        <Link href="/contacts">
          <a className={ classes.navLink }>Контакты</a>
        </Link>
      </ListItem>
      {/* <ListItem className={ classes.listItem }>
          <Link href="mailto:murarovvitalij@gmail.com">
            <a target="_blank" className={ classes.navLink } >
              <i className={classes.socialIcons + " fab fa fa-envelope"}  aria-hidden="true"/>
              <span className={ classes.email } >e-mail: murarovvitalij@gmail.com</span>
            </a>
          </Link>
        </ListItem>
        <ListItem className={ classes.listItem }>
          <Link href="tel:380665388579">
            <a className={ classes.navLink }>
              <i className={classes.socialIcons + " fab fa fa-phone-square"}aria-hidden="true"/>
              <span className={ classes.phone } >Тел: +38 (066)-538-85-79</span>
            </a>
          </Link>
        </ListItem> */}
    </List>
  );
}
