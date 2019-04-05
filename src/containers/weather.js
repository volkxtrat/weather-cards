import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Weather from "../components/View/Weather/Weather";

import * as WeatherActionCreators from "../store/actions/weather";

function mapStateToProps(state) {
  return {
    weatherCards: state.weather.weatherCards,
    weatherError: state.weather.error
  };
}

function mapDispatchToProps(dispath) {
  return {
    actions: {
      weather: bindActionCreators(WeatherActionCreators, dispath)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
