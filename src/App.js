import React, { Component } from "react";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
        </div>
      </Provider>
    );
  }
}

export default App;
