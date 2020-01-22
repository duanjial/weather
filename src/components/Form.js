import React, { Component } from "react";
import { getWeather } from "../actions/weather";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    city: "",
    country: ""
  };

  static propTypes = {
    getWeather: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { city, country } = this.state;
    this.props.getWeather(city, country);
    this.setState({
      city: "",
      country: ""
    });
  };

  render() {
    const { city, country } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              placeholder="city"
              name="city"
              value={city}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="country"
              name="country"
              value={country}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { getWeather }
)(Form);
