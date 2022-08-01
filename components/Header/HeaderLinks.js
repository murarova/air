/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";


import styles from "styles/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={ classes.list }>
      <ListItem className={ classes.listItem }>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Услуги"
          buttonProps={ {
            className: classes.navLink,
            color: "transparent",
          } }
          dropdownList={ [
            <Link href="/mounting">
              <a className={ classes.dropdownLink }>Монтаж кондиционеров</a>
            </Link>,
            <Link href="/maintenance">
              <a className={ classes.dropdownLink }>ТО кондиционеров</a>
            </Link>,
            <Link href="/trail">
              <a className={ classes.dropdownLink }>Закладка трасс</a>
            </Link>,
            <Link href="/dismantling">
              <a className={ classes.dropdownLink }>Демонтаж кондиционеров</a>
            </Link>,
          ] }
        />
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
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Контакты"
          buttonProps={ {
            className: classes.navLink,
            color: "transparent",
          } }
          dropdownList={ [
            <Link href="mailto:murarovvitalij@gmail.com">
              <a target="_blank" className={ classes.socialLink } >
                <i className={ classes.socialIcons + " fab fa fa-envelope" } aria-hidden="true" />
                <span className={ classes.email } >murarovvitalij@gmail.com</span>
              </a>
            </Link>,
            <Link href="tel:380665388579">
              <a className={ classes.socialLink }>
                <i className={ classes.socialIcons + " fab fa fa-phone-square" } aria-hidden="true" />
                <span className={ classes.phone } >+380665388579</span>
              </a>
            </Link>,
          ] }
        />
      </ListItem>
    </List>
  );
}
