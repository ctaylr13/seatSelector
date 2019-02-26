import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import SeatButton from "./components/SeatButton";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Select a Seat</h1>
        <SeatButton />
      </div>
    );
  }
}

export default App;
