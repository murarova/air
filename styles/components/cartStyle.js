const cartStyle = {
  cartFooter: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 0 20px",
    flexWrap: "wrap",
    alignItems: "center"
  },
  total : {
    whiteSpace: "nowrap",
    marginBottom: "2rem",
    fontSize: "1rem",
    color: "#3c4858",
    fontWeight: "500"
  },
  checkoutButton : {
    marginBottom: "2rem",
  },
  tableWrapper: {
    padding: "1rem 0",
  },
  productWrapper: {
    display: "flex",
    alignItems: "center"
  },
  image: {
    display: "table-cell",
    "@media (max-width: 576px)": {
      display: "none",
    },
  },
  imageContainer: {
    display: "flex",
    alignItems: "center", 
    width: "100px",

    "@media (max-width: 576px)": {
      display: "none",
    },
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "contain"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  amount: {
    margin: 0
  }
};

export default cartStyle;
