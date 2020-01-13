import React, { Component } from "react";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import Form from "./components/Form";
import DisplayWeather from "./components/DisplayWeather";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Form />
          <DisplayWeather />
        </div>
      </Provider>
    );
  }
}

export default App;
