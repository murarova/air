import { title } from "styles/jss/nextjs-material-kit.js";

const serviceStyle = {
  section: {
    padding: "40px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    padding: "0 10px",
    margin: "10px 0",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  card: {
    boxShadow: "none",
    "&:hover": {
      background: "rgba(200, 200, 200, 0.2)"
    },
    "@media (max-width: 960px)": {
      height: "100%",
    }
  }
};

export default serviceStyle;
