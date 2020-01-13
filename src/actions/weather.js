import {
    GET_WEATHER,
    WEATHER_LOADING
} from "./types";
import axios from "axios";

export const getCurrentLocationWeather = () => dispatch => {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
    }

    function error() {
        console.log('Unable to retrieve your location');
    }
    dispatch(WEATHER_LOADING);
    if (!navigator.geolocation) {
        console.log("Geolocation is not supported for your browser");
    } else {
        console.log("Locating...");
        navigator.geolocation.getCurrentPosition(success, error);
    }
};