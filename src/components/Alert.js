import React, { Component } from "react";
import { connect } from "react-redux";

export class Alert extends Component {
  render() {
    return (
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        {this.props.error.msg}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(Alert);
