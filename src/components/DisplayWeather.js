import React, {
    Component
} from 'react'
import {
    connect
} from "react-redux";
import {
    getCurrentLocationWeather
} from "../actions/weather";

export class DisplayWeather extends Component {
    componentDidMount() {
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
        }

        function error() {
            console.log('Unable to retrieve your location');
        }
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported for your browser");
        } else {
            console.log("Locating...");
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    render() {
        return ( 
            <div className = "container mt-3" >

            <h2 > Weather for your current location </h2>
            </div>
        )
    }
}

export default DisplayWeather