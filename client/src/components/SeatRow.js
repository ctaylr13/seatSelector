import React, { Component } from 'react';
import SeatButton from './SeatButton';

class SeatRow extends Component {
    render() {
        const { row, selectSeatFunction, selectedSeat } = this.props;
        
        return(
            <div>
                {row.map((seat, index) => {
                    if(seat.class === "Business" || seat.class === "First") {
                        if ((index + 1) === row.length / 2) {
                            return (
                                <SeatButton key={seat.seat + seat.row.toString()} seat={seat.seat} occupied={seat.occupied} row={seat.row} margin={true} selectSeatFunction={selectSeatFunction} selectedSeat={selectedSeat}/>
                            )
                        }   
                        return (<SeatButton key={seat.seat + seat.row.toString()} seat={seat.seat} occupied={seat.occupied} row={seat.row} selectSeatFunction={selectSeatFunction} selectedSeat={selectedSeat}/>) 
                    } else {
                        if(seat.seat === "B" || seat.seat === "G"){
                            return (<SeatButton  key={seat.seat + seat.row.toString()} seat={seat.seat} occupied={seat.occupied} row={seat.row} margin={true} selectSeatFunction={selectSeatFunction} selectedSeat={selectedSeat}/>)
                        }
                        return (<SeatButton key={seat.seat + seat.row.toString()} seat={seat.seat} occupied={seat.occupied} row={seat.row} selectSeatFunction={selectSeatFunction} selectedSeat={selectedSeat}/>) 
                    }

                    
                })}
            </div>
        );   
    }
}

export default SeatRow;

