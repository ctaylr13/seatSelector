import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import SeatButton from "./components/SeatButton";
import SeatRow from "./components/SeatRow";
import uuid from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldData: [[
          {id:uuid(), seat:"A", row:1, class:"First", occupied:false },
          {id:uuid(), seat:"B", row:1, class:"First", occupied:false },
          {id:uuid(), seat:"D", row:1, class:"First", occupied:true },
          {id:uuid(), seat:"E", row:1, class:"First", occupied:false }
      ],
      [
          {id:uuid(), seat:"A", row:2, class:"First", occupied:false },
          {id:uuid(), seat:"B", row:2, class:"First", occupied:false },
          {id:uuid(), seat:"C", row:2, class:"First", occupied:true },
          {id:uuid(), seat:"E", row:2, class:"First", occupied:false },
          {id:uuid(), seat:"F", row:2, class:"First", occupied:true },
          {id:uuid(), seat:"G", row:2, class:"First", occupied:false }
      ],
      [
          {id:uuid(), seat:"A", row:1, class:"First", occupied:false },
          {id:uuid(), seat:"B", row:1, class:"First", occupied:false },
          {id:uuid(), seat:"D", row:1, class:"First", occupied:true },
          {id:uuid(), seat:"E", row:1, class:"First", occupied:false }
      ],
      [
          {id:uuid(), seat:"A", row:2, class:"First", occupied:false },
          {id:uuid(), seat:"B", row:2, class:"First", occupied:false },
          {id:uuid(), seat:"D", row:2, class:"First", occupied:true },
          {id:uuid(), seat:"E", row:2, class:"First", occupied:false }
      ]],
      seatRow: [],
    };
  }

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
        <h1>Select a Seat</h1>
        {this.state.oldData.map((row) => (
          <SeatRow row={row}/>
        ))}
        <h1>Actual data</h1>
        {this.state.seatRow.map((row) => (
          <SeatRow row={row}/>
        ))}
      </div>
    );
  }
}

export default App;
