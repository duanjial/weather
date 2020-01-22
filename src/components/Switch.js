import React, { Component } from "react";
import { connect } from "react-redux";
import { changeUnit } from "../actions/unit";

export class Switch extends Component {
  onClick = e => {
    this.props.changeUnit();
  };
  render() {
    return (
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          onClick={this.onClick}
        />
        <label className="custom-control-label" for="customSwitch1">
          °F
        </label>
      </div>
    );
  }
}

export default connect(
  null,
  { changeUnit }
)(Switch);
