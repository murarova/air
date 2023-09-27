import Badge from "components//Badge/Badge";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Hidden from "@material-ui/core/Hidden";
import IconButton from '@material-ui/core/IconButton';
import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/headerLinksStyle.js";
import { useAuth } from "context/auth";
import { useCart } from "context/shopping-cart";
import { useRouter } from 'next/router'

const useStyles = makeStyles(styles);

export default function HeaderLinks({ handleDrawerToggle }) {
  const classes = useStyles();
  const { user, logout } = useAuth()
  const router = useRouter()
  const { totalQty } = useCart();

  async function handleLogout() {
    logout();
    handleDrawerToggle();
    router.push("/");
  }

  return (
    <div className={ classes.listContainer }>
      <List className={ classes.list }>
        { user && <ListItem onClick={ handleDrawerToggle } className={ classes.listItem }>
          <Link href="/admin" className={ classes.navLink }>
            Адмін
          </Link>
        </ListItem> }
        <ListItem onClick={ handleDrawerToggle } className={ classes.listItem }>
          <Link href="/products" className={ classes.navLink }>
            Каталог
          </Link>
        </ListItem>
        <ListItem className={ classes.listItem }>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText="Послуги"
            buttonProps={ {
              className: classes.navLink,
              color: "transparent",
            } }
            onClick={ handleDrawerToggle }
            dropdownList={ [
              <Link href="/products" className={ classes.dropdownLink }>
                Продаж кондиціонерів
              </Link>,
              <Link href="/mounting" className={ classes.dropdownLink }>
                Монтаж кондиціонерів
              </Link>,
              <Link href="/maintenance" className={ classes.dropdownLink }>
                ТО кондиціонерів
              </Link>,
              <Link href="/repair" className={ classes.dropdownLink }>
                Ремонт кондиціонерів
              </Link>,
              <Link href="/trail" className={ classes.dropdownLink }>
                Закладка трас
              </Link>,
              <Link href="/dismantling" className={ classes.dropdownLink }>
                Демонтаж кондиціонерів
              </Link>
            ] }
          />
        </ListItem>
        <ListItem onClick={ handleDrawerToggle } className={ classes.listItem }>
          <Link href="/prices" className={ classes.navLink }>
            Прайс-ліст
          </Link>
        </ListItem>
        <ListItem onClick={ handleDrawerToggle } className={ classes.listItem }>
          <Link href="/delivery" className={ classes.navLink }>
            Доставка і оплата
          </Link>
        </ListItem>
        <ListItem className={ classes.listItem }>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText="Контакти"
            buttonProps={ {
              className: classes.navLink,
              color: "transparent",
            } }
            onClick={ handleDrawerToggle }
            dropdownList={ [
              <Link
                href="mailto:murarovvitalij@gmail.com"
                target="_blank"
                className={ classes.socialLink }>

                <i className={ classes.socialIcons + " fab fa fa-envelope" } aria-hidden="true" />
                <span className={ classes.email } >murarovvitalij@gmail.com</span>

              </Link>,
              <Link href="tel:+380960501129" className={ classes.socialLink }>

                <i className={ classes.socialIcons + " fab fa fa-phone-square" } aria-hidden="true" />
                <span className={ classes.phone } >+380960501129</span>

              </Link>,
            ] }
          />
        </ListItem>
        <Hidden smDown>
          <ListItem onClick={ handleDrawerToggle } className={ classes.listItem }>
            <Link href="/cart" className={ classes.navLink }>
              <Badge overlap="rectangular" badgeContent={ totalQty } color="primary">
                Кошик
              </Badge>
            </Link>
          </ListItem>
        </Hidden>
      </List>

      { user && <IconButton
        className={ classes.logoutBtn }
        onClick={ handleLogout }>
        <ExitToAppIcon />
      </IconButton> }
    </div>
  );
}
