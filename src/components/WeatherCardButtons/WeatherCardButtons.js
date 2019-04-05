import React from "react";
import { NavLink } from "react-router-dom";

import Card from "../Ui/Card/Card";
import Button from "../Ui/Button/Button";

export default function WeatherCardButtons({
  to,
  isSync,
  handleRemoveCard,
  handleSyncCard,
  nameLink
}) {
  const clsIcon = ["fas fa-sync-alt"];
  if (isSync) clsIcon.push("fa-spin")
  return (
    <Card.Content>
      <div style={{ display: "flex" }}>
        <Button onClick={handleRemoveCard} variant="primary">
          <i className="fas fa-trash-alt" />
        </Button>
        <Button as={NavLink} exact to={to} fullWidth variant="secondary">
          {nameLink}
        </Button>
        <Button onClick={handleSyncCard} variant="primary">
          <i className={clsIcon.join(" ")} />
        </Button>
      </div>
    </Card.Content>
  );
}
