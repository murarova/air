
const contactMeStyles = {
  wrapper: ({ open }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    position: "fixed",
    bottom: "40px",
    right: "2px",
    zIndex: "999",
    flexDirection: "column",
    backgroundColor: "rgba(0, 128, 128, .4)",
    transform: open ? null : "translateX(70px)",
    transition: "transform 330ms ease-in-out"
  }),
  contactBtn: ({ open }) => ({
    left: "-25px",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    width: "25px",
    backgroundColor: "rgba(0, 128, 128, .8)",
    borderRadius: "5px 0px 0px 5px",

    "&:before": {
      content: open ? "'Свернуть'" : "'Связаться с нами'",
      color: "#ffffff",
      display: "inline-block",
      position: "absolute",
      top: "0",
      bottom: "5px",
      right: "0",
      left: "0",
      whiteSpace: "nowrap",
      writingMode: "vertical-lr",
      transform: "rotate(-180deg)"
    }
  }),
  phone: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    color: "#ffffff",
    width: "50px",
    height: "50px",
    marginBottom: "22px",
    backgroundColor: "rgb(116, 228, 116)",
    animation: '$phone 1.5s 2s 1',
    borderRadius: "50%",
    "&:hover, &:focus": {
      color: "#ffffff",
    }
  },
  viber: {
    animation: '$viber 1.5s 5s 1',
    width: "50px",
    height: "50px",
    borderRadius: "50%",
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
