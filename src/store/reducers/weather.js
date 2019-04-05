import {
  GET_WEATHER_CARDS,
  PATCH_WEATHER_CARD,
  DELETE_WEATHER_CARD,
  UPDATE_START_WEATHER,
  ERROR_WEATHER_CARD
} from "../actions/actionTypes";

const initialState = {
  weatherCards: {}
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_CARDS: {
      return {
        ...state,
        weatherCards: action.payload.weatherCards
      };
    }
    case PATCH_WEATHER_CARD: {
      const weatherCards = Object.assign(
        { ...state.weatherCards },
        action.payload.weatherCard
      );
      return {
        ...state,
        weatherCards,
        error: null
      };
    }
    case UPDATE_START_WEATHER: {
      const weatherCards = Object.assign(
        { ...state.weatherCards },
        action.payload.weatherCard
      );
      return {
        ...state,
        weatherCards
      };
    }
    case ERROR_WEATHER_CARD: {
      return {
        ...state,
        error: action.payload.error
      };
    }
    case DELETE_WEATHER_CARD: {
      const weatherCards = { ...action.payload.weatherCards };
      return {
        ...state,
        weatherCards
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
