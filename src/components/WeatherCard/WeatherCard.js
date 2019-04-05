import React from "react";

import Card from "../Ui/Card/Card";
import WeatherCardWidget from "../WeatherCardWidget/WeatherCardWidget";
import WeatherCardButtons from "../WeatherCardButtons/WeatherCardButtons";

export default function WeatherCard({
  to,
  icon,
  temp,
  city,
  isSync,
  degrees,
  humidity,
  description,
  handleSyncCard,
  handleRemoveCard
}) {
  return (
    <Card>
      <Card.Content>
        <div>
          <Card.Header>{city}</Card.Header>({description})
        </div>
      </Card.Content>
      <WeatherCardWidget
        temp={temp}
        icon={icon}
        humidity={humidity}
        degrees={degrees}
      />
      <WeatherCardButtons
        handleSyncCard={handleSyncCard}
        handleRemoveCard={handleRemoveCard}
        nameLink="Detail info"
        isSync={isSync}
        to={to}
      />
    </Card>
  );
}
