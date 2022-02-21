import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// core components
import { accentColor, title } from "styles/default-styles.js";

const useStyles = makeStyles({
  progress: {
    color: accentColor,
    width: "6rem !important",
    height: "6rem !important",
  },
  iconWrapper: {
    margin: "150px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0",
  },
  title: {
    ...title,
    color: "#FFFFFF",
  },
});

export default function PageChange() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
      </div>
    </div>
  );
}
