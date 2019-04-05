import React from "react";
import classes from "./WeatherCardWidget.module.scss";

import Card from "../Ui/Card/Card";
import { getWeatherIcon, getDegrees } from "../../utils";

export default function WeatherCardWidget({ icon, temp, humidity, degrees }) {
  return (
    <Card.Content>
      <div className={classes.mainContent}>
        <Card.Line center>
          <div className={classes.weatherIcon}>
            <i className={getWeatherIcon(icon)} />
          </div>
          <div className={classes.degrees}>{getDegrees(temp, degrees)}</div>
        </Card.Line>
        <Card.Line center>humidity: {humidity}%</Card.Line>
      </div>
    </Card.Content>
  );
}
