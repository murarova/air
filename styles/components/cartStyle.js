const cartStyle = {
  cartFooter: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 0 20px",
    flexWrap: "wrap"
  },
  total : {
    whiteSpace: "nowrap",
    marginBottom: "2rem"
  },
  tableWrapper: {
    padding: "1rem 0",
  },
  productWrapper: {
    display: "flex",
    alignItems: "center"
  },
  imageContainer: {
    display: "flex",
    alignItems: "center", 
    height: "100px",
    width: "200px",

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
