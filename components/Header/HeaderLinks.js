import Badge from "../Badge/Badge";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/headerLinksStyle.js";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/shopping-cart";
import { useRouter } from 'next/router'

const useStyles = makeStyles(styles);

export default function HeaderLinks({ handleDrawerToggle }) {
  const classes = useStyles();
  const { user, logout } = useAuth()
  const router = useRouter()
  const { totalQty } = useCart();

  async function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <div className={ classes.listContainer }>
      <List className={ classes.list }>
        { user && <ListItem onClick={handleDrawerToggle} className={ classes.listItem }>
          <Link href="/admin">
            <a className={ classes.navLink }>Админ</a>
          </Link>
        </ListItem> }
        <ListItem onClick={handleDrawerToggle} className={ classes.listItem }>
          <Link href="/products">
            <a className={ classes.navLink }>Каталог</a>
          </Link>
        </ListItem>
        <ListItem className={ classes.listItem }>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText="Услуги"
            buttonProps={ {
              className: classes.navLink,
              color: "transparent",
            } }
            onClick={handleDrawerToggle}
            dropdownList={ [
              <Link href="/products">
                <a className={ classes.dropdownLink }>Продажа кондиционеров</a>
              </Link>,
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
        <ListItem onClick={handleDrawerToggle} className={ classes.listItem }>
          <Link href="/prices">
            <a className={ classes.navLink }>Прайс-лист</a>
          </Link>
        </ListItem>
        <ListItem onClick={handleDrawerToggle} className={ classes.listItem }>
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
            onClick={handleDrawerToggle}
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
        <ListItem onClick={handleDrawerToggle} className={ classes.listItem }>
          <Link href="/cart">
            <a className={ classes.navLink }>
              <Badge badgeContent={ totalQty } color="primary">
                Корзина
              </Badge>
            </a>
          </Link>
        </ListItem>
      </List>

      { user && <IconButton
        className={ classes.logoutBtn }
        onClick={ handleLogout }>
        <ExitToAppIcon />
      </IconButton> }
    </div>

  );
}
