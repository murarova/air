import { infoColor } from "styles/jss/nextjs-material-kit.js";

const sectionStyles = {
  btnWrapper: {
    display: "flex",
    justifyContent: "end"
  },
  mainTitle: {
    marginBottom: "20px",
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#3C4858"
  },
  trailSubTitle: {
    margin: "0",
    fontWeight: "600",
    fontSize: "1.1rem",
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
  final: {
    marginTop: "20px",
    color: "#3C4858"
  }
};

export default sectionStyles;
