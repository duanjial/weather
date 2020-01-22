import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCurrentLocationWeather,
  getWeatherWithDifferentUnit
} from "../actions/weather";
import PropTypes from "prop-types";
import GMap from "./GMap";

export class DisplayWeather extends Component {
  static propTypes = {
    getCurrentLocationWeather: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCurrentLocationWeather();
  }

  componentDidUpdate = prevProps => {
    if (prevProps.metric !== this.props.metric) {
      this.props.getWeatherWithDifferentUnit();
    }
  };
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
          <h2>Current Weather</h2>
          <span>
            <strong className="mr-1">{city}</strong>
            {Math.round(temp)} °{this.props.metric ? "C" : "F"}
            <span className="ml-2">
              Feels Like {Math.round(feelsLike)} °
              {this.props.metric ? "C" : "F"}
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
              Low at: {Math.round(tempMin)} °{this.props.metric ? "C" : "F"}
            </span>
          </p>
          <p>
            <span>
              High at: {Math.round(tempMax)} °{this.props.metric ? "C" : "F"}
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
export default connect(
  mapStateToProps,
  { getCurrentLocationWeather, getWeatherWithDifferentUnit }
)(DisplayWeather);
