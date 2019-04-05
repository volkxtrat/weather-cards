import React from "react";
import classes from "./CardLine.module.scss";

export default function CardLine({ center, children }) {
  return (
    <div
      style={center && { justifyContent: "center" }}
      className={classes.line}
    >
      {children}
    </div>
  );
}
