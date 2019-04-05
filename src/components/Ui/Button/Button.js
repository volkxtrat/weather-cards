import React from "react";
import classes from "./Button.module.scss";

function buttonStyles(variant) {
  const cls = [classes.button, "ripple"];
  switch (variant) {
    case "primary": {
      cls.push(classes.primary);
      return cls;
    }
    case "secondary": {
      cls.push(classes.secondary);
      return cls;
    }
    default: {
      return cls;
    }
  }
}

export default function Button({ as, fullWidth, variant, children, ...props }) {
  const cls = buttonStyles(variant);
  if (fullWidth) cls.push("fullWidth");
  const Compenent = as;
  return (
    <Compenent className={cls.join(" ")} {...props}>
      {children}
    </Compenent>
  );
}

Button.defaultProps = {
  as: "div"
};
