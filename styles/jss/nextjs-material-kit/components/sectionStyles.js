import { title } from "styles/jss/nextjs-material-kit.js";

const sectionStyles = {
  section: ({ color }) => ({
    padding: "20px 0",
    position: "relative",
    "@media (max-width: 960px)": {
      background: color,
      marginBottom: "20px",
    }
  }),
  title: {
    ...title,
    textAlign: "center",
    marginBottom: "2rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    "@media (max-width: 960px)": {
      fontSize: "1.75rem",
      margin: "0.75rem"
    }
  },
  description: {
    color: "#3c4858",
  },
  container: ({ position }) => ({
    display: "flex",
    flexDirection: position === "left" ? "row" : "row-reverse",
    paddingBottom: "65px",
    "@media (max-width: 960px)": {
      "& > div": {
        padding: "0"
      }
    }
  }),
  image: ({ image }) => ({
    flex: "1",
    "&:before": {
      display: "block",
      height: "100%",
      width: "100%",
      background: `linear-gradient(92deg,rgba(255,255,255,.0001) 0%\,rgba(255,255,255,.3) 100%)\,url(${ image })`,
      backgroundSize: "cover",
      content: "' '",
      willChange: "transform",
      "-webkit-backface-visibility": "hidden",
      "@media (max-width: 960px)": {
        background: `linear-gradient(92deg,rgba(255,255,255,.8) 0%\,rgba(255,255,255,.8) 100%)\,url(${ image })`,
      }
    },
    "@media (max-width: 960px)": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0"
    }

  }),
  sectionText: {
    flex: "1",
    "@media (max-width: 960px)": {
      height: "100%",
      maxHeight: "150px",

      "& > p": {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-line-clamp": "3",
        "-webkit-box-orient": "vertical"
      }
    }

  },
  btnWrapper: {
    display: "flex",
    justifyContent: "start"
  },
};

export default sectionStyles;
