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
  label: {
    color: "inherit",
  },
  specificationContainer: {
    position: "relative",
    paddingTop: "50px"
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
  imagesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  asterisk: {
    position: "absolute",
    fontSize: ".7rem",
    color: "red"
  },
}
