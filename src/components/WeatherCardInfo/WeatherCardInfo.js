import React, { PureComponent } from "react";

import Card from "../Ui/Card/Card";
import { getWeatherDetailInfo } from "../../utils";
import WeatherCardWidget from "../WeatherCardWidget/WeatherCardWidget";
import WeatherCardButtons from "../WeatherCardButtons/WeatherCardButtons";
import routes from "../../routes/routes";

import classes from "./WeatherCardInfo.module.scss";

class WeatherCardInfo extends PureComponent {
  onDeleteCard = () => {
    const { history, actions, weatherCard } = this.props;
    history.push(routes.weather);
    actions.weather.deleteWeatherCard(weatherCard.weather.id);
  };
  onSyncCard = () => {
    const { actions, weatherCard } = this.props;
    actions.weather.updateCurrentWeather(weatherCard.weather.id);
  };
  render() {
    const { weatherCard, degrees } = this.props;
    return (
      <div className={classes.wrapper}>
        {weatherCard ? (
          <Card style={{ minWidth: "400px" }}>
            <Card.Content>
              <div>
                <Card.Header>{weatherCard.weather.name}</Card.Header>(
                <span>{weatherCard.weather.weather[0].main})</span>
              </div>
            </Card.Content>
            <WeatherCardWidget
              temp={weatherCard.weather.main.temp}
              icon={weatherCard.weather.weather[0].icon}
              humidity={weatherCard.weather.main.humidity}
              degrees={degrees}
            />
            <Card.Content>
              {getWeatherDetailInfo(weatherCard.weather, degrees).map(info => (
                <div key={info.key}>
                  <Card.Line>
                    {info.icon && (
                      <i className={`${info.icon} ${classes.keyIcon}`} />
                    )}
                    <span className={classes.key}>{info.key}:</span>
                    <span>{info.value}</span>
                  </Card.Line>
                </div>
              ))}
            </Card.Content>
            <WeatherCardButtons
              handleSyncCard={this.onSyncCard}
              handleRemoveCard={this.onDeleteCard}
              isSync={weatherCard.isLoading}
              nameLink="Back"
              to={routes.weather}
            />
          </Card>
        ) : (
          <Card>
            <Card.Content>
              <div className={classes.wrapper}>
                <i className="fas fa-circle-notch fa-spin" />
              </div>
            </Card.Content>
          </Card>
        )}
      </div>
    );
  }
}

export default WeatherCardInfo;
