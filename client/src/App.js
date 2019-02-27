import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import SeatButton from "./components/SeatButton";
import SeatRow from "./components/SeatRow";
import uuid from 'uuid';


class App extends Component {
  state = {
    seatRow:
    [ 
      [
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
      ]
    ]
};
  
  render() {
    return (
      <div className="App" >
        <h1>Select a Seat</h1>
        {this.state.seatRow.map((row) => (
          <SeatRow row={row}/>
        ))}
      </div>
    );
  }
}

export default App;
