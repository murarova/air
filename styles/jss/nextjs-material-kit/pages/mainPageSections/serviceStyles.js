import { title } from "styles/jss/nextjs-material-kit.js";

const serviceStyle = {
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
    color: "#999",
  },
  card: {
    "&:hover": {
      background: "rgba(200, 200, 200, 0.2)"
    },
    "@media (max-width: 960px)": {
      height: "100%",
      maxHeight: "210px",
    }
  }
};

export default serviceStyle;
