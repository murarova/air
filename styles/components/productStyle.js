import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 auto"
  },
  content: {
    padding: 8
  },
  media: {
    height: 200,
  },
  actions: {
    padding: 8,
    justifyContent: "space-between"
  },
  more: {
    color: "#ef7215"
  }
});
