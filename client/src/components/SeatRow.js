import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SeatButton from './SeatButton';
import uuid from 'uuid';

class SeatRow extends Component {
    render() {
        const { row } = this.props;
        
        return(
            <div>
                {row.map((seat, index) => {
                    if ((index + 1) === row.length / 2) {
                        return (<SeatButton seat={seat.seat} occupied={seat.occupied} margin={true} />)
                    }
                    return (<SeatButton seat={seat.seat} occupied={seat.occupied} />) 
                })}
            </div>
        );   
    }
}

export default SeatRow;

