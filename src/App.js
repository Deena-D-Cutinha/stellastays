import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}
