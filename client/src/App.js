import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import SeatRow from "./components/SeatRow";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seatRow: [],
      selectedSeat: null
    };
  }

  selectSeat = (seatNum) => {
    this.setState({
      selectedSeat: seatNum
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
          disabled={true}>Available</Button>
        <Button
          size="lg" 
          color="primary"
          disabled={true}>Occupied</Button>
          <Button
          size="lg" 
          color="danger"
          disabled={true}>Selected</Button>
        <br></br>
        {this.state.seatRow.map((row) => (
          <SeatRow row={row} selectSeatFunction={this.selectSeat.bind(this)} selectedSeat={this.state.selectedSeat} />
        ))}
      </div>
    );
  }
}

export default App;
