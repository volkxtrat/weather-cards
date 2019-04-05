import React from "react";

import classes from "./CardHeader.module.scss";

export default function CardHeader({ children }) {
  return <span className={classes.header}>{children}</span>;
}
