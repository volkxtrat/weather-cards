import React, { useEffect, useRef } from "react";
import classes from "./Input.module.scss";

function Input({ autoFocus, value, ...props }) {
  const inputRef = useRef();
  useEffect(() => {
    if (autoFocus) inputRef.current.focus();
  }, []);
  return (
    <input
      className={classes.Input}
      ref={inputRef}
      type="text"
      value={value}
      {...props}
    />
  );
}

export default Input;
