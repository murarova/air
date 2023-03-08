import {
  infoColor
} from "styles/default-styles.js";

const cartItemStyle = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `1px solid ${infoColor}`,
    paddingBottom: "20px",
  },
  information: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center", 
    width: "100px",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "contain"
  }, 
  quantity: {
    padding: "5px 20px",
    margin: "0"
  }
};

export default cartItemStyle;
