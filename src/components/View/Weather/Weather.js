import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";

import WeatherCardsAdd from "../../WeatherCardAdd/WeatherCardAdd";
import WeatherCardsList from "../../WeatherCardsList/WeatherCardsList";
import WeatherCardInfo from "../../WeatherCardInfo/WeatherCardInfo";
import routes from "../../../routes/routes";
import Button from "../../Ui/Button/Button";

import classes from "./Weather.module.scss";

class Weather extends Component {
  state = {
    isAdd: false,
    degrees: "C"
  };

  onFahrenheitDegrees = () => {
    this.setState({ degrees: "F" });
  };
  onCelsiusDegrees = () => {
    this.setState({ degrees: "C" });
  };
  toggleDegrees = () => {
    if (this.state.degrees === "C") this.onFahrenheitDegrees();
    else this.onCelsiusDegrees();
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.props);
  // }

  toggleIsAdd = () => {
    this.setState(state => ({
      isAdd: !state.isAdd
    }));
  };

  render() {
    const { actions, weatherCards, weatherError } = this.props;
    return (
      <div className={classes.weather}>
        <div className={classes.toolBar}>
          <NavLink to={routes.weather} className={classes.logo}>
            <i className="fas fa-atom" />
          </NavLink>
          <div>
            <Button onClick={this.toggleDegrees}>º{this.state.degrees}</Button>
          </div>
          <WeatherCardsAdd
            fetch={actions.weather.addCurrentWeather}
            isAdd={this.state.isAdd}
            onClick={this.toggleIsAdd}
            error={weatherError}
          />
        </div>
        <Switch>
          <Route
            exact
            path={routes.weather}
            render={props => (
              <WeatherCardsList
                degrees={this.state.degrees}
                actions={actions}
                weatherCards={weatherCards}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={routes.weatherId}
            render={props => (
              <WeatherCardInfo
                degrees={this.state.degrees}
                actions={actions}
                weatherCard={weatherCards[props.match.params.id]}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Weather;
