import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Container,
  NavbarToggler
} from "reactstrap";
import { connect } from "react-redux";
import Switch from "./Switch";
import { cToF } from "./DisplayWeather";

class AppNavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const {
      currentIcon,
      currentLocation,
      currentTemp,
      currentFeelsLike,
      isLoading
    } = this.props.weather;

    const loading = (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    const temperature = (
      <div>
        <NavItem>
          <NavbarText className="ml-2">
            {this.props.metric
              ? `${Math.round(currentTemp)}°C`
              : `${Math.round(cToF(currentTemp))}°F`}
          </NavbarText>
          <NavbarText className="ml-2">
            Feels Like{" "}
            {this.props.metric
              ? `${Math.round(currentFeelsLike)}°C`
              : `${Math.round(cToF(currentFeelsLike))}°F`}
          </NavbarText>
        </NavItem>
      </div>
    );

    const loaded = (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavbarText>
            <strong>{currentLocation}</strong>
          </NavbarText>
        </NavItem>
        <NavItem className="ml-2">
          <img
            src={`http://openweathermap.org/img/wn/${currentIcon}.png`}
            alt="Weather Icon"
          />
        </NavItem>
        {currentTemp ? temperature : null}
      </Nav>
    );

    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">MyWeather</NavbarBrand>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              {isLoading ? loading : loaded}
              <Switch />
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather,
  metric: state.unit.metric
});

export default connect(mapStateToProps)(AppNavBar);
