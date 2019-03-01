import React, { Component } from 'react';
import { Button } from 'reactstrap';



class SeatButton extends Component {

    clicked = () => {
        const { seat, row, selectSeatFunction } = this.props; 
        var seatNum = seat + row.toString();
        selectSeatFunction(seatNum);
       
    };

    unclicked = () => {
        const { selectSeatFunction } = this.props; 
        selectSeatFunction(null); 
    }



    render() {
        const { seat, occupied, margin, row, selectedSeat } = this.props; 
        const seatNum = seat + row.toString();
        const selected = selectedSeat === seatNum;

        return(
            <Button
                size="sm"
                className="select"
                color={selected ? "danger" : (occupied ? "primary" : "secondary") }
                disabled={occupied ? true : false}
                style={{marginRight: margin ? 15 : 0}}
                onClick={selected ? this.unclicked : this.clicked}
                active={selected ? true : false}
                key={seatNum}
            >{seatNum}</Button>
        );
    }

    
}

export default SeatButton;