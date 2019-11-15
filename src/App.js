import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import DisplayItems from "./components/DisplayItem";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <DisplayItems />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
