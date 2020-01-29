import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentLocationWeather } from "../actions/weather";
import PropTypes from "prop-types";
import GMap from "./GMap";

export class DisplayWeather extends Component {
  static propTypes = {
    getCurrentLocationWeather: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCurrentLocationWeather();
  }

  render() {
    const {
      city,
      weatherDescription,
      isLoading,
      weatherIcon,
      temp,
      feelsLike,
      tempMin,
      tempMax
    } = this.props.weather;

    const weatherLoaded = (
      <div style={style}>
        <div className="mx-auto">
          <h2>Current Weather for {city}</h2>
          <span>
            {/* <strong className="mr-1">{city}</strong> */}
            {this.props.metric
              ? `${Math.round(temp)}°C`
              : `${Math.round(cToF(temp))}°F`}
            <span className="ml-2">
              Feels Like{" "}
              {this.props.metric
                ? `${Math.round(feelsLike)}°C`
                : `${Math.round(cToF(feelsLike))}°F`}
            </span>
          </span>
          <br></br>
          <span>
            <i>
              <strong>{weatherDescription}</strong>
            </i>
            <img
              src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              alt="Weather Icon"
            />
          </span>
          <p>
            <span>
              Low at:{" "}
              {this.props.metric
                ? `${Math.round(tempMin)}°C`
                : `${Math.round(cToF(tempMin))}°F`}
            </span>
          </p>
          <p>
            <span>
              High at:{" "}
              {this.props.metric
                ? `${Math.round(tempMax)}°C`
                : `${Math.round(cToF(tempMax))}°F`}
            </span>
          </p>
        </div>
        <div className="mx-auto">
          <GMap></GMap>
        </div>
      </div>
    );

    const weatherLoading = (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    return (
      <div className="container mt-3">
        {isLoading ? weatherLoading : weatherLoaded}
      </div>
    );
  }
}

const style = {
  display: `flex`,
  flexDirection: `row`
};
const mapStateToProps = state => ({
  weather: state.weather,
  metric: state.unit.metric
});

export const cToF = celcius => celcius * 1.8 + 32;

export default connect(
  mapStateToProps,
  { getCurrentLocationWeather }
)(DisplayWeather);
