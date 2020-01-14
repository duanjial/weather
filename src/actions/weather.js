import { GET_WEATHER, WEATHER_LOADING, WEATHER_LOADED } from "./types";
import axios from "axios";

export const getCurrentLocationWeather = () => dispatch => {
  dispatch({ type: WEATHER_LOADING });
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?APPID=133630514a7236f21424fca33c7eb702&units=metric&q=toronto,ca"
    )
    .then(res => {
      dispatch({
        type: GET_WEATHER,
        payload: res.data
      });
      dispatch({ type: WEATHER_LOADED });
    })
    .catch(err => {
      console.log(err);
    });
};

const getCurrentLocation = () => {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return { lat: latitude, lon: longitude };
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported for your browser");
  } else {
    console.log("Locating...");
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
