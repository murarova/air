export default {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "1rem",
    borderRadius: "5px",
    position: "relative",
    height: "100%",
    overflowY: "auto",
    margin: "1rem 0",

    "@media (max-width: 576px)": {
      padding: "0",
    },
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
    flex: 1,
  },
  error: {
    color: "red",
    fontSize: ".75rem"
  },
  inputLabel: {
    color: "inherit"
  },
  asterisk: {
    position: "absolute",
    fontSize: ".7rem",
    color: "red"
  },
  groupWrapper: {
    padding: "1rem 0"
  },
  input: {
    width: "100%",
    padding: "0.5rem",
  },
  label: {
    color: "inherit",
    marginBottom: "5px"
  },
  information: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemWrapper: {
    justifyContent: "space-between",
    padding: "5px 0",
  },
  orderWrapper: {
    padding: "10px 0",
    marginTop: "1rem"
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
  quantity: {
    padding: "5px 20px",
    margin: "0"
  },
  total: {
    padding: "0.5rem 0"
  },
  checkout: {
    alignSelf: "end"
  },
  checkoutRow: {
    height: "4rem"
  }
}
