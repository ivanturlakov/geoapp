import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

import React, { useContext } from "react";
import Context from "../context";
import NoContent from "./Pin/NoContent";
import CreatePin from "./Pin/CreatePin";
import PinContent from "./Pin/PinContent";

const Blog = ({ classes }) => {
  const { state } = useContext(Context);
  const { draft, currentPin } = state;
  const mobileSize = useMediaQuery('(max-width: 650px)');

  let BlogContent;

  if(!draft && !currentPin) {
    BlogContent = NoContent
  } else if(draft && !currentPin) {
    BlogContent = CreatePin
  } else if(!draft && currentPin) {
    BlogContent = PinContent
  }
  return (
    <Paper className={mobileSize ? classes.rootMobile : classes.root}>
      <BlogContent />
    </Paper>
  )
};

const styles = {
  root: {
    minWidth: 350,
    maxWidth: 400,
    maxHeight: "100vh",
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center",
    paddingTop: "70px"
  },
  rootMobile: {
    maxWidth: "100%",
    maxHeight: 300,
    overflowX: "hidden",
    overflowY: "scroll",
    paddingTop: "56px"
  }
};

export default withStyles(styles)(Blog);
