import { GET_WEATHER, WEATHER_LOADING, WEATHER_LOADED } from "../actions/types";

const initialState = {
  isLoading: false,
  city: null,
  country: null,
  weatherDescription: null,
  weatherIcon: null,
  temp: null,
  feelsLike: null,
  tempMin: null,
  tempMax: null
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
        weatherDescription: action.payload.weather[0].description,
        weatherIcon: action.payload.weather[0].icon,
        temp: action.payload.main.temp,
        feelsLike: action.payload.main.fells_like,
        tempMin: action.payload.main.temp_min,
        tempMax: action.payload.main.temp_max
      };
    default:
      return state;
  }
}
