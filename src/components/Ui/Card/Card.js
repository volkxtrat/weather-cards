import React from "react";
import classes from "./Card.module.scss";

import CardHeader from "./CardHeader/CardHeader";
import CardContent from "./CardContent/CardContent";
import CardLine from "./CardLine/CardLine";

export default function Card({ onClick, button, children }) {
  const clsCard = [classes.card];
  if (button) clsCard.push("ripple");

  function handleClick(e) {
    if (onClick) onClick(e);
  }

  return (
    <div onClick={handleClick} className={clsCard.join(" ")}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Line = CardLine;
