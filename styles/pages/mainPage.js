import { container, title, infoColor, accentColor } from "styles/default-styles.js";

const landingPageStyle = {
  wrapper: {
    position: "relative",
    paddingBottom: "60px"
  },
  container: {
    zIndex: "12",
    color: "#3C4858",
    ...container,
    "@media (max-width: 960px)": {
      overflowWrap: "break-word",
      paddingBottom: "20px"
    }
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#3C4858",
    textDecoration: "none",
    "@media (max-width: 480px)": {
      fontSize: "2.2rem",
    },
    "@media (max-width: 960px)": {
      color: "#FFFFFF",
      overflowWrap: "break-word",
      maxWidth: "90%",
    }
  },
  list: {
    padding: "0"
  },
  listItem: {
    listStyle: "none",
    paddingLeft: "50px",
    position: "relative",
    "&:before": {
      content: '"\\276F"',
      position: "absolute",
      left: "1em",
      color: infoColor
    }
  },
  accent: {
    color: accentColor,
    whiteSpace: "nowrap"
  },
  advertisingBlock: {
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "5px",
    width: "fit-content",
    fontWeight: "700",
    "@media (max-width: 960px)": {
      color: "#FFFFFF",
      margin: "0",
      backgroundColor: "rgba(0, 0, 0, 0.2)",

    }
  },
  subtitle: {
    margin: "0",
    fontWeight: "700",
    "@media (max-width: 960px)": {
      color: "#FFFFFF",
      margin: "0"
    }
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 960px)": {
      margin: "-50px 30px 0px",
    },
    "@media (max-width: 576px)": {
      margin: "-20px 10px 0px"
    },
  },
};

export default landingPageStyle;
