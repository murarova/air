import { accentColor } from "styles/jss/nextjs-material-kit.js";

const sectionStyles = {
  btnWrapper: {
    display: "flex",
    justifyContent: "end"
  },
  mainTitle: {
    marginBottom: "20px",
    fontSize: "1.3rem",
    fontWeight: "700"
  },
  trailSubTitle: {
    margin: "0",
    fontSize: "1.2rem",
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
      color: accentColor
    }
  },
  final: {
    marginTop: "20px",
  }
};

export default sectionStyles;
