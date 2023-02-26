import {
  infoColor
} from "styles/default-styles.js";

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
    margin: "1rem 0"
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  groupWrapper: {
    padding: "1rem 0"
  },
  input: {
    width: "100%",
    marginBottom: "1rem",
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
  imageContainer: {
    display: "flex",
    alignItems: "center",
    height: "60px",
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
  }
}
