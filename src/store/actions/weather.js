import { getWeatherByCityName, getWeatherByCityId } from "../../api/api";
import {
  DELETE_WEATHER_CARD,
  GET_WEATHER_CARDS,
  PATCH_WEATHER_CARD,
  ERROR_WEATHER_CARD,
  UPDATE_START_WEATHER
} from "./actionTypes";

export function addCurrentWeather(city) {
  return async dispatch => {
    try {
      const data = await getWeatherByCityName(city);
      if (+data.cod > 400) {
        dispatch(dispatchEror("City not found"));
        return;
      }
      const newCard = { [data.id]: { weather: data, isLoading: false } };
      dispatch(dispatchWeather(newCard));
      patchLocalStorage(newCard);
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateCurrentWeather(id) {
  return async (dispatch, getState) => {
    try {
      const weatherCard = getState().weather.weatherCards[id];
      dispatch(dispatchStartUpdate(weatherCard));
      const data = await getWeatherByCityId(id);
      if (+data.cod > 400) {
        dispatch(dispatchEror("City not found"));
        return;
      }
      const newCard = { [data.id]: { weather: data, isLoading: false } };
      dispatch(dispatchWeather(newCard));
      patchLocalStorage(newCard);
    } catch (error) {
      console.log(error);
    }
  };
}

export function getWeatherCards() {
  return dispatch => {
    const localWeather = localStorage.getItem("weatherCard");
    if (localWeather) {
      dispatch({
        type: GET_WEATHER_CARDS,
        payload: { weatherCards: JSON.parse(localWeather) }
      });
    }
  };
}

export function deleteWeatherCard(id) {
  return (dispatch, getState) => {
    const weatherCards = getState().weather.weatherCards;
    delete weatherCards[id];
    dispatch({ type: DELETE_WEATHER_CARD, payload: { weatherCards } });
    if (!!weatherCards)
      localStorage.setItem("weatherCard", JSON.stringify(weatherCards));
  };
}

function patchLocalStorage(updateCard) {
  const localWeather = localStorage.getItem("weatherCard");
  if (localWeather) {
    const oldCards = JSON.parse(localWeather);
    const newCards = { ...oldCards, ...updateCard };

    localStorage.setItem("weatherCard", JSON.stringify(newCards));
  } else {
    localStorage.setItem("weatherCard", JSON.stringify(updateCard));
  }
}

function dispatchWeather(weatherCard) {
  return {
    type: PATCH_WEATHER_CARD,
    payload: {
      weatherCard
    }
  };
}
function dispatchEror(error) {
  return {
    type: ERROR_WEATHER_CARD,
    payload: {
      error
    }
  };
}
function dispatchStartUpdate(weatherCard) {
  weatherCard.isLoading = true;
  return {
    type: UPDATE_START_WEATHER,
    payload: {
      weatherCard: { [weatherCard.weather.id]: weatherCard }
    }
  };
}
