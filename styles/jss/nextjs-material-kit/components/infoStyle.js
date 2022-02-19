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
} from "styles/jss/nextjs-material-kit.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "20px auto 0",
    padding: "0px",
  },
  iconWrapper: {
    backgroundColor: grayColor,
    margin: "0 auto",
    padding: "10px",
    width: "fit-content",
    borderRadius: "50%",
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
    color: "white"
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden",
  },
  title: {
    ...title,
    "@media (max-width: 960px)": {
      fontSize: "14px",
    }
  },
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px",
    
  },
  iconWrapperVertical: {
    float: "none",
  },
  iconVertical: {
    width: "61px",
    height: "61px",
  },
};

export default infoStyle;
