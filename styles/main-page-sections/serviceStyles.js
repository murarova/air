import { title, infoColor } from "styles/default-styles.js";

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
  sectionContent: {
    padding: "40px 0 0",
  },
  description: {
    color: "#999",
  },
  serviceLink: {
    display: "flex",
    height: "100%",
    justifyContent: "center"
  },
  card: {
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "rgba(200, 200, 200, 0.1)",
    },
    "@media (max-width: 960px)": {
      height: "100%",
    }
  }
};

export default serviceStyle;
