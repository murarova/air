import { container, title } from "styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#3C4858",
    ...container,
    "@media (max-width: 960px)": {
      fontSize: "2em",
      overflowWrap: "break-word",
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
    "@media (max-width: 960px)": {
      color: "#FFFFFF",
      overflowWrap: "break-word",
      maxWidth: "90%",
    }
  },
  subtitle: {
    "@media (max-width: 960px)": {
      color: "#FFFFFF"
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
