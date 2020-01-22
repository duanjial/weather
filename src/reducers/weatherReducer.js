import {
  GET_WEATHER,
  GET_WEATHER_DIFF_UNIT,
  GET_CURRENT_WEATHER,
  WEATHER_LOADING,
  WEATHER_LOADED
} from "../actions/types";

const initialState = {
  isLoading: false,
  currentLocation: null,
  city: null,
  country: null,
  weatherDescription: null,
  currentDescription: null,
  currentIcon: null,
  weatherIcon: null,
  temp: null,
  currentTemp: null,
  feelsLike: null,
  currentFeelsLike: null,
  tempMin: null,
  tempMax: null,
  lat: null,
  lon: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case WEATHER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case WEATHER_LOADED:
      return {
        ...state,
        isLoading: false
      };
    case GET_WEATHER:
      return {
        ...state,
        city: action.payload.name,
        country: action.payload.sys.country,
        weatherDescription: action.payload.weather[0].description,
        weatherIcon: action.payload.weather[0].icon,
        temp: action.payload.main.temp,
        feelsLike: action.payload.main.feels_like,
        tempMin: action.payload.main.temp_min,
        tempMax: action.payload.main.temp_max,
        lat: action.payload.coord.lat,
        lon: action.payload.coord.lon
      };
    case GET_WEATHER_DIFF_UNIT:
      return {
        ...state,
        temp: action.payload.main.temp,
        currentTemp: action.payload.main.temp,
        feelsLike: action.payload.main.feels_like,
        currentFeelsLike: action.payload.main.feels_like,
        tempMin: action.payload.main.temp_min,
        tempMax: action.payload.main.temp_max
      };
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        currentLocation: action.payload.name,
        city: action.payload.name,
        country: action.payload.sys.country,
        weatherDescription: action.payload.weather[0].description,
        weatherIcon: action.payload.weather[0].icon,
        currentIcon: action.payload.weather[0].icon,
        temp: action.payload.main.temp,
        currentTemp: action.payload.main.temp,
        feelsLike: action.payload.main.feels_like,
        currentFeelsLike: action.payload.main.feels_like,
        tempMin: action.payload.main.temp_min,
        tempMax: action.payload.main.temp_max,
        lat: action.payload.coord.lat,
        lon: action.payload.coord.lon
      };
    default:
      return state;
  }
}
