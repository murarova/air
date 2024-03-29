import { accentColor, container, infoColor, title } from "styles/default-styles.js";

const landingPageStyle = {
  wrapper: {
    position: "relative",
    paddingBottom: "60px"
  },
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
  catalogTitle: {
    ...title,
    margin: 0
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
      color: infoColor
    }
  },
  repairListItem: {
    listStyle: "none",
    paddingLeft: "50px",
    position: "relative",
    "&:before": {
      content: '"\\276F"',
      position: "absolute",
      left: "1em",
      color: infoColor
    },
    paddingTop: "10px",
    paddingBottom: "10px"
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
      color: accentColor
    }
  },
  accent: {
    fontWeight: "bold",
  },
  payment: {
    padding: "5px",
    borderRadius: "5px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    "@media (min-width: 576px)": {
      width: "fit-content",
      padding: "10px",
    },
  },
  paymentPropName: {
    marginRight: "1rem",
  },
  deliveryCard: {
    width: "100%",
    padding: "20px",
    background: "rgba(32,32,32,.7)",
    borderRadius: "5px",
    color: "#3C4858",
    "& > h2": {
      marginBottom: "20px"
    },
    "& > p": {
      fontSize: "18px"
    }
  },
  contactsItem: {
    color: "#3C4858",
    fontSize: "18px",
    padding: '10px 0',
    margin: "0",
    fontWeight: "500",
    "&:hover,&:focus": {
      color: accentColor,
    },
  },
  contactsItemCity: {
    color: "#3C4858",
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
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    "@media (max-width: 540px)": {
      padding: "10px",
    }
  },
  login: {
    position: "absolute",
    left: "50%",
    top: "20%",
    transform: "translate(-50%, -30%)",
    padding: "2rem 2rem 4rem",
    display: "flex",
    flexDirection: "column",
    width: "100%",

    "@media screen and (min-width: 641px)": {
      width: "70%",
    },

    "@media screen and (min-width: 1008px)": {
      width: "50%",
    }
  },
  adminContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2rem",

    "@media screen and (max-width: 959px)": {
      flexDirection: "column"
    }
  },
  rateContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  rateName: {
    margin: "0",
    marginRight: "20px"
  },
  saveBtn: {
    marginLeft: "20px"
  },
  inputError: {
    position: "absolute",
    bottom: "-1.5rem",
    left: "0rem",
    color: "red",
    fontSize: "0.7rem",
  },
  progressWrapper: {
    position: "relative"
  },
  progress: {
    color: accentColor,
    width: "1rem !important",
    height: "1rem !important",
    position: "absolute",
    right: "10px",
    top: "12px"
  },
  imageContainer: {
    height: "350px",
    display: "flex",
    alignItems: "center"
  },
  propuctImage: {
    height: "100%",
    width: "100%",
    objectFit: "contain"
  },
  adminWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  saveNewProductBtn: {
    "@media screen and (max-width: 959px)": {
      marginTop: "20px",
    },
  },
  сheckoutSuccessWrapper: {
    padding: "3rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  сheckoutSuccessIcon: {
    fontSize: "70px",
    marginBottom: "40px"
  },
  сheckoutSuccessTitle: {
    marginBottom: "20px"
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "0",
    left: "15px",
    right: " 15px",
  },
  sectionWrapper: {
    paddingBottom: "3rem"
  },
  filter: {
    marginBottom: "2rem"
  },
  filterValues: {
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center"
  },
  filterValue: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    margin: "0 30px 0 10px",
    border: "1px solid",
    borderColor: accentColor,
    borderRadius: "10px",
  },
  filterName: {
    display: "block",
    marginRight: "5px",
    fontWeight: "bold"
  },
  deleteFilter: {
    zIndex: "1",
    display: "flex",
    opacity: "0.5",
    cursor: "pointer",
    padding: "2px",

    "&:hover": {
      opacity: "0.7"
    }
  },
  deleteIcon: {
    fontSize: "1rem",
  },
  filterTitle: {
    fontSize: "1.2rem",
  },
  brandFilter: {
    position: "relative",
    margin: "1rem 0"
  },
  bannerContainer: {
    margin: "20px 0"
  },
  repairContainer: {
    margin: "20px 0"
  },
};

export default landingPageStyle;
