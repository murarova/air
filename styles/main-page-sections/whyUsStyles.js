import { infoColor, title } from "styles/default-styles.js";

const serviceStyle = {
  section: {
    padding: "20px 0 40px",
  },
  title: {
    ...title,
    marginBottom: "50px",
    textAlign: "center",
    textDecoration: "none",
    lineHeight: "1.1"
  },
  card: {
    height: "100%",
    margin: "0 auto",
    borderRadius: "0px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "80%",
    overflow: "hidden",
    position: "relative",
    padding: "10px 10px 10px",
    backgroundColor: "rgba(255,255,255, 0.01)",
    textAlign: "center",
    "&:before": {
      content: '""',
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: infoColor,
      position: "absolute",
      bottom: "145%",
      right: "0",
      left: "0",
      opacity: "0.9",
      transform: "scale(3)",
    },
    "@media (max-width: 960px)": {
      width: "100%",
    },
    "@media (max-width: 600px)": {
      width: "80%",
    }
  },
  decor: {
    marginBottom: "10px",
  },
  number: {
    display: "inline-block",
    height: "130px",
    width: "130px",
    marginBottom: "40px",
    zIndex: "1",
    position: "relative",
    "&:before": {
      content: '""',
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: infoColor,
      position: "absolute",
      bottom: "135%",
      right: "0",
      left: "0",
      opacity: "0.9",
      transform: "scale(3)",
      transition: "all 0.3s linear 0s",
    },
    "&:after": {
      content: '""',
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: infoColor,
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "-1",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    boxShadow: "0 0 0 14px #f7f5ec",
    transform: "scale(0.7)",
  },
  mainTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#3C4858"
  },
  brandList: {
    paddingTop: "3.5rem",
    marginBottom: "2rem"
  }

};

export default serviceStyle;
