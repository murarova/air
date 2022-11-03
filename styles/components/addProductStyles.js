export default {
  container: {
    position: "relative",
    width: "90%",
    height: "90%",
    top: "5%",
    backgroundColor: "white",
    padding: "55px 10px 10px 10px",
    left: "calc(50% - (90% / 2))",

    "@media screen and (min-width: 641px)": {
      width: "70%",
      left: "calc(50% - (70% / 2))",
    },

    "@media screen and (min-width: 1008px)": {
      width: "50%",
      left: "calc(50% - (50% / 2))",
    },
  },
  btnWrapper: {
    position: "absolute",
    right: "5px",
    top: "2px",
    zIndex: 1
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "1rem",
    borderRadius: "5px",
    position: "relative",
    border: "1px solid rgba(60, 72, 88, 0.25)",
    height: "100%",
    overflowY: "auto",
  },
  input: {
    width: "100%",
    marginBottom: "1rem",
    padding: "0.5rem",
  },
  label: {
    color: "inherit",
  },
  specificationContainer: {
    position: "relative",
  },
  addBtn: {
    position: "absolute",
    top: "-5px",
    right: 0
  },
  specificationGroup: {
    padding: "10px 0"
  },
  deleteBtn: {
  },
  propertieContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& > p": {
      margin: 0,
    }
  },
  title: {
    textAlign: "center"
  },
}
