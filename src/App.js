import React, { Component } from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./components/index";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage} />
      </div>
    );
  }
}
