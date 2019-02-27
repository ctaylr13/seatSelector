import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class SeatButton extends Component {
    render() {
        const { seat, occupied, margin } = this.props;  
        return(
            <Button
                className="select"
                size="md"
                color={occupied ? "primary" : "secondary"}
                disabled={occupied ? true : false}
                style={{marginRight: margin ? 10 : 0}}
            >{seat}</Button>
        );
    }
}

export default SeatButton;