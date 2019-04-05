import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import routes from "../../routes/routes";
import classes from "./WeatherCardsList.module.scss";

export default function WeatherCardsList({ weatherCards, actions, degrees }) {
  return (
    <div className={classes.grid}>
      {Object.keys(weatherCards).map(key => {
        const weatherCard = weatherCards[key];

        return (
          <WeatherCard
            key={weatherCard.weather.id}
            to={`${routes.weather}/${weatherCard.weather.id}`}
            city={weatherCard.weather.name}
            description={weatherCard.weather.weather[0].main}
            humidity={weatherCard.weather.main.humidity}
            temp={weatherCard.weather.main.temp}
            icon={weatherCard.weather.weather[0].icon}
            isSync={weatherCard.isLoading}
            degrees={degrees}
            handleRemoveCard={() =>
              actions.weather.deleteWeatherCard(weatherCard.weather.id)
            }
            handleSyncCard={() =>
              actions.weather.updateCurrentWeather(weatherCard.weather.id)
            }
          />
        );
      })}
    </div>
  );
}
