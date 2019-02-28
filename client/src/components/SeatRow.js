import React, { Component } from 'react';
import SeatButton from './SeatButton';

class SeatRow extends Component {
    render() {
        const { row, deactivateSeats } = this.props;
        
        return(
            <div>
                {row.map((seat, index) => {
                    if(seat.class === "Business" || seat.class === "First") {
                        if ((index + 1) === row.length / 2) {
                            return (
                                <SeatButton key={seat.seat + seat.row.toString()} seat={seat.seat} occupied={seat.occupied} row={seat.row} margin={true} deactivateSeats={deactivateSeats}/>
                            )
                        }   
                        return (<SeatButton key={seat.seat + seat.row.toString()} seat={seat.seat} occupied={seat.occupied} row={seat.row} deactivateSeats={deactivateSeats}/>) 
                    } else {
                        if(seat.seat === "B" || seat.seat === "G"){
                            return (<SeatButton  key={seat.seat + seat.row.toString()} seat={seat.seat} occupied={seat.occupied} row={seat.row} margin={true} deactivateSeats={deactivateSeats}/>)
                        }
                        return (<SeatButton key={seat.seat + seat.row.toString()} seat={seat.seat} occupied={seat.occupied} row={seat.row} deactivateSeats={deactivateSeats}/>) 
                    }

                    
                })}
            </div>
        );   
    }
}

export default SeatRow;

