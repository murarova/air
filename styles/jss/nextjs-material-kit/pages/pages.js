import { container, title } from "styles/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "",
    padding: "10px 0 30px",
    minHeight: "calc(100vh - 50px - 50px - 80px)",
    height: "100%",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#55555",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "100px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 960px)": {
      margin: "90px 10px 0px",
    },
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: "30px"
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
      color: "teal"
    }
  },
  trailTitle: {
    fontWeight: "bold"
  },
  trailSube: {
    fontWeight: "bold",
    paddingLeft: "50px",
    position: "relative",
    "&:before": {
      content: '"\\276F"',
      position: "absolute",
      left: "1em",
      color: "teal"
    }
  },
  accent: {
    fontWeight: "bold",
  },
  deliveryCard: {
    width: "80%",
    padding: "20px",
    background: "rgba(32,32,32,.7)",
    borderRadius: "5px",
    color: "#FFFFFF",
    "@media (max-width: 992px)": {
      width: "100%",
    },
    "& > h2": {
      marginBottom: "20px"
    },
    "& > p": {
      fontSize: "18px"
    }
  },
  contactsCard: {
    borderRadius: "5px",
    width: "50%",
    padding: "20px",
    background: "rgba(32,32,32,.7)",
    color: "#FFFFFF",
    fontWeight: "500",
    "@media (max-width: 992px)": {
      width: "100%",
    },
  },
  contactsItem: {
    color: "#FFFFFF",
    fontSize: "18px",
    padding: '10px 0',
    margin: "0",
    fontWeight: "500",
    "&:hover,&:focus": {
      color: "teal",
    },
  },
  contactsItemCity: {
    color: "#FFFFFF",
    fontSize: "18px",
    padding: '10px 0',
    margin: "0",
    fontWeight: "500",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
    color: "inherit"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
    color: "inherit"
  },
  email: {
    marginLeft: "10px",
    textTransform: "lowercase",
    color: "inherit"
  },
  phone: {
    marginLeft: "12px",
    textTransform: "lowercase",
    color: "inherit"
  },
  pageWithBackground: {
    minHeight: "calc(100vh - 50px - 50px - 80px)",
    height: "100%",
    padding: "30px",
    background: `linear-gradient(92deg,rgba(255,255,255,.0001) 0%\,rgba(255,255,255,.3) 100%)\,url(img/contacts-bg.jpeg)`,
    backgroundSize: "cover"
  },
};

export default landingPageStyle;
