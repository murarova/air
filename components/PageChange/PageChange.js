import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
// core components
import { accentColor } from "styles/default-styles.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  progress: {
    color: accentColor,
    width: "6rem !important",
    height: "6rem !important",
  }
});

export default function PageChange() {
  const classes = useStyles();
  return (
    <div className="loading">
      <CircularProgress className={ classes.progress } />
    </div>
  );
}
