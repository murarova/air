
const contactMeStyles = {
  wrapper: () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    position: "fixed",
    bottom: "40px",
    right: "2px",
    zIndex: "999",
    flexDirection: "column",
  }),
  phone: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    color: "#ffffff",
    width: "60px",
    height: "60px",
    marginBottom: "22px",
    backgroundColor: "rgb(116, 228, 116)",
    animation: '$phone 1.5s 2s 1',
    borderRadius: "50%",
    "&:hover, &:focus": {
      color: "#ffffff",
    },
    boxShadow: "rgb(0 0 0 / 30%) 0px 3px 1px -2px, rgb(0 0 0 / 12%) 0px 2px 2px 0px, rgb(0 0 0 / 22%) 0px 1px 5px 0px"
  },
  viber: {
    animation: '$viber 1.5s 5s 1',
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "rgb(0 0 0 / 30%) 0px 3px 1px -2px, rgb(0 0 0 / 12%) 0px 2px 2px 0px, rgb(0 0 0 / 22%) 0px 1px 5px 0px"
  },
  '@keyframes phone': {
    from: { boxShadow: "0 0 0 0px rgba(116, 228, 116, 0.5)" },
    to: { boxShadow: "0 0 0 40px rgba(207, 241, 207, 0)" }
  },
  '@keyframes viber': {
    from: { boxShadow: "0 0 0 0px rgba(115, 96, 242, 0.5)" },
    to: { boxShadow: "0 0 0 40px rgba(115, 96, 242, 0)" }
  }
};

export default contactMeStyles;
