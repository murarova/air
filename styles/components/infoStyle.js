import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  secondAccentColor,
  title,
} from "styles/default-styles.js";

const infoStyle = {
  infoArea: {
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  primary: {
    color: primaryColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: grayColor,
  },
  accent: {
    color: secondAccentColor,
  },
  icon: {
    width: "36px",
    height: "36px",
    display: "block",
    color: "white",
    margin: "0 auto",
  },
  descriptionWrapper: {
    overflow: "hidden",
  },
  title: {
    ...title,
    margin: "1rem 0 0",
    color: "#3C4858",

    "@media (max-width: 960px)": {
      fontSize: "14px",
    }
  },
  iconWrapperVertical: {
    float: "none",
  },
  iconVertical: {
    color: infoColor,
    opacity: "0.85",
    width: "122px",
    height: "122px",
  },
};

export default infoStyle;
