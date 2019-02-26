import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import SeatButton from "./components/SeatButton";
import TestButton from "./components/TestButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cardiel the God</h1>
        <SeatButton />
        <h2>Heath the beast</h2>
        <TestButton />
      </div>
    );
  }
}

export default App;
