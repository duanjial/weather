import {
  GET_WEATHER,
  GET_CURRENT_WEATHER,
  WEATHER_LOADING,
  WEATHER_LOADED
} from "./types";
import axios from "axios";
import { baseURL } from "../config";
import { getErrorMessage } from "./errors";

export const getCurrentLocationWeather = () => dispatch => {
  dispatch({ type: WEATHER_LOADING });
  // success callback
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    axios
      .get(`${baseURL}&units=metric&lat=${latitude}&lon=${longitude}`)
      .then(res => {
        dispatch({
          type: GET_CURRENT_WEATHER,
          payload: res.data
        });
        dispatch({ type: WEATHER_LOADED });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // fail callback
  function error() {
    const msg = "Unable to retrieve your location";
    dispatch(getErrorMessage(msg));
  }

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported for your browser");
  } else {
    console.log("Locating...");
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

export const getWeather = (city, country) => dispatch => {
  dispatch({ type: WEATHER_LOADING });
  axios
    .get(`${baseURL}&units=metric&q=${city},${country}`)
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
