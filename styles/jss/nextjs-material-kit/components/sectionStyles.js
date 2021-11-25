import { title } from "styles/jss/nextjs-material-kit.js";

const sectionStyles = {
  section: {
    padding: "20px 0",
  },
  title: {
    ...title,
    textAlign: "center",
    marginBottom: "2rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#3c4858",
  },
  container: ({ position }) => ({
    display: "flex",
    flexDirection: position === "left" ? "row" : "row-reverse",
  }),
  image: ({ image }) => ({
    flex: "1",
    background: `linear-gradient(92deg,rgba(255,255,255,.0001) 0%\,rgba(255,255,255,.3) 100%)\,url(${ image })`,
    backgroundSize: "cover"
  }),
  sectionText: {
    flex: "1",
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "start"
  }
};

export default sectionStyles;
