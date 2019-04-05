import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import classes from "./App.module.scss";
import routes from "./routes/routes";
import Weather from "./containers/weather";
import { connect } from "react-redux";
import { getWeatherCards } from "./store/actions/weather";

class App extends Component {
  componentDidMount() {
    this.props.getWeatherCards();
  }
  render() {
    return (
      <div className={classes.app}>
        <Switch>
          <Route path={routes.weather} component={Weather} />
          <Redirect to={routes.weather} />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getWeatherCards: () => dispatch(getWeatherCards())
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
