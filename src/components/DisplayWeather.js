import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentLocationWeather } from "../actions/weather";
import PropTypes from "prop-types";

export class DisplayWeather extends Component {
  static propTypes = {
    getCurrentLocationWeather: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCurrentLocationWeather();
  }

  render() {
    return (
      <div className="container mt-3">
        <h2> Weather for your current location </h2>
        <p>{this.props.weather.city}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});
export default connect(
  mapStateToProps,
  { getCurrentLocationWeather }
)(DisplayWeather);
