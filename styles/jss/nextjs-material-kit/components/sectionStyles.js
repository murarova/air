import { title } from "styles/jss/nextjs-material-kit.js";

const sectionStyles = {
  section: {
    padding: "20px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#3c4858",
  },
  wrapRight: {
    width: "40%",
    float: "left",
    margin: "10px"
  },
  wrapLeft: {
    width: "40%",
    float: "right",
    margin: "10px"
  },
  sectionText: {
    textAlign: "justify",
    textIndent: "2em"
  },
};

export default sectionStyles;
