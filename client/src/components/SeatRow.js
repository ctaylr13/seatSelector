import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SeatButton from './SeatButton';
import uuid from 'uuid';

class SeatRow extends Component {
    render() {
        const { row, deactivateSeats } = this.props;
        
        return(
            <div>
                {row.map((seat, index) => {
                    if(seat.class === "Business" || seat.class === "First") {
                        if ((index + 1) === row.length / 2) {
                            return (
                                <SeatButton seat={seat.seat} occupied={seat.occupied} row={seat.row} margin={true} deactivateSeats={deactivateSeats}/>
                            )
                        }   
                        return (<SeatButton seat={seat.seat} occupied={seat.occupied} row={seat.row} deactivateSeats={deactivateSeats}/>) 
                    } else {
                        if(seat.seat === "B" || seat.seat === "G"){
                            return (<SeatButton seat={seat.seat} occupied={seat.occupied} row={seat.row} margin={true} deactivateSeats={deactivateSeats}/>)
                        }
                        return (<SeatButton seat={seat.seat} occupied={seat.occupied} row={seat.row} deactivateSeats={deactivateSeats}/>) 
                    }

                    
                })}
            </div>
        );   
    }
}

export default SeatRow;

