import { title, infoColor } from "styles/jss/nextjs-material-kit.js";

const serviceStyle = {
  section: {
    padding: "20px 0 40px",
  },
  title: {
    ...title,
    margin: "10px 0 20px",
    textAlign: "center",
    textDecoration: "none",
    lineHeight: "1.1"
  },
  card: {
    overflow: "hidden",
    position: "relative",
    padding: "30px 10px 40px",
    marginBottom: "30px",
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
    }
  },
  decor: {
    marginBottom: "40px",
  },
  number: {
    display: "inline-block",
    height: "130px",
    width: "130px",
    marginBottom: "50px",
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
    marginBottom: "20px",
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#3C4858"
  },

};

export default serviceStyle;
