import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: 345,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 auto",
    padding: "10px",
  
  },
  content: {
    padding: 8
  },
  media: {
    height: 200,
    backgroundSize: "contain"
  },
  actions: {
    padding: 8,
    justifyContent: "space-between"
  },
  buy: {
    color: "#ef7215",
    zIndex: 1,
  },
  btnWrapper: {
    position: "absolute",
    top: "10px",
    right: "10px",
    pointerEvents: "all",
    zIndex: 1
  }
});
