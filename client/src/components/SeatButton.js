import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class SeatButton extends Component {
     constructor(props) {
        super(props);
    
    state = {
        selected: false,
        disabled: false
    }


    clicked = () => {
        console.log("clicked yo");
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
        console.log("selected",this.state.selected);
        var seatNum = seat + row.toString();

        return(
            <Button
                className="select"
                color={selected ? "danger" : (occupied ? "primary" : "secondary") }
                disabled={deactivateSeats ? false : (occupied ? true : false)}
                style={{marginRight: margin ? 15 : 0}}
                onClick={selected ? this.unclicked : this.clicked}
                active={selected ? true : false}
            >{seatNum}</Button>
        );
    }

    
}

export default SeatButton;