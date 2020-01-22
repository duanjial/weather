import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { connect } from "react-redux";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDgriiMoUNZs_yhncj_uYHbKEessHZGTHU",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `250px`, width: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: props.lat, lng: props.lon }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: props.lat, lng: props.lon }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

export class GMap extends Component {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };
  render() {
    const { lat, lon } = this.props.weather;
    return (
      <MyMapComponent
        lat={lat}
        lon={lon}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});
export default connect(mapStateToProps)(GMap);
