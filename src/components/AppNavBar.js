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
      currentFeelsLike
    } = this.props.weather;
    const temperature = (
      <div>
        <NavItem>
          <NavbarText className="ml-2">
            {Math.round(currentTemp)} °{this.props.metric ? "C" : "F"}
          </NavbarText>
          <NavbarText className="ml-2">
            Feels Like {Math.round(currentFeelsLike)} °
            {this.props.metric ? "C" : "F"}
          </NavbarText>
        </NavItem>
      </div>
    );

    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">MyWeather</NavbarBrand>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
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
