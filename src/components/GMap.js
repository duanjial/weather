import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
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
    <Marker
      position={{ lat: props.lat, lng: props.lon }}
      onClick={props.onMarkerClick}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onMarkerClick}>
          <p>Hello</p>
        </InfoWindow>
      )}
    </Marker>
  </GoogleMap>
));

export class GMap extends Component {
  state = {
    isOpen: false
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
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { lat, lon } = this.props.weather;
    return (
      <MyMapComponent
        lat={lat}
        lon={lon}
        isOpen={this.state.isOpen}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});
export default connect(mapStateToProps)(GMap);
