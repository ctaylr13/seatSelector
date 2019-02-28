import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import SeatButton from "./components/SeatButton";
import SeatRow from "./components/SeatRow";
import uuid from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);
    // this.deactivateSeats = this.deactivateSeats.bind(this);
    this.state = {
      seatRow: [],
      deactivateSeats: false
    };
  }

  deactivateSeats = () => {
    this.setState({
      deactivateSeats: !this.state.deactivateSeats
    })
  };

  componentDidMount() {
    var initialArray = [];
    axios.get(`/api/seats`)
      .then(res => {
        initialArray = Object.keys(res.data).map(i => res.data[i]);
        var finalArray = [];
        var tempArray = [];
        for (var i = 0; i < initialArray.length; i++) {  
          var currentSeat = initialArray[i];
          var previousSeat = initialArray[i - 1];
          if( !previousSeat ) {
              tempArray.push(currentSeat);
          } else if(previousSeat.row === currentSeat.row) {
              tempArray.push(currentSeat);
          } else {
              finalArray.push(tempArray);
              tempArray = [currentSeat];
          }
        } 
        finalArray.push(tempArray);
        console.log("final array", finalArray);
        this.setState({
          seatRow: finalArray
        });
      })
  }
  
  
  render() {
    return (
      <div className="App" >
        <h1>Welcome to Air Lola</h1>
        <h2>Please pick a seat</h2>
        <Button
          size="lg" 
          color="secondary"
          disabled="true">Available</Button>
        <Button
          size="lg" 
          color="primary"
          disabled="true">Occupied</Button>
          <Button
          size="lg" 
          color="danger"
          disabled="true">Selected</Button>
        <h2></h2>
        {this.state.seatRow.map((row) => (
          <SeatRow row={row} deactivateSeats={this.deactivateSeats.bind(this)}/>
        ))}
      </div>
    );
  }
}

export default App;
