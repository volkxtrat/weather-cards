import React from "react";

import classes from "./CardContent.module.scss";

export default function CardContent({ children, ...props }) {
  return (
    <div className={classes.content} {...props}>
      {children}
    </div>
  );
}
