import React, { Component } from 'react';
import { Button } from 'reactstrap';



class SeatButton extends Component {
    state = {
        selected: false,
        disabled: false
    }


    clicked = () => {
        this.setState({
            selected: !this.state.Selected,
        })
        this.props.deactivateSeats();
    };

    unclicked = () => {
        this.setState({
            selected: this.state.Selected
        })
        this.props.deactivateSeats();
    }



    render() {
        const { seat, occupied, margin, row, deactivateSeats } = this.props; 
        const { selected } = this.state;
        var seatNum = seat + row.toString();

        return(
            <Button
                className="select"
                color={selected ? "danger" : (occupied ? "primary" : "secondary") }
                disabled={deactivateSeats ? false : (occupied ? true : false)}
                style={{marginRight: margin ? 15 : 0}}
                onClick={selected ? this.unclicked : this.clicked}
                active={selected ? true : false}
                key={seatNum}
            >{seatNum}</Button>
        );
    }

    
}

export default SeatButton;