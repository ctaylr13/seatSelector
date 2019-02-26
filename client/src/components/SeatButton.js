import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class SeatButton extends Component {
    state = {
        seats: [
            {id:uuid(), seat:"A", row:1, class:"First", occupied:false },
            {id:uuid(), seat:"B", row:1, class:"First", occupied:false },
            {id:uuid(), seat:"D", row:1, class:"First", occupied:true },
            {id:uuid(), seat:"E", row:1, class:"First", occupied:false },
        ]
    }

    render() {
        const { seats } = this.state;
        return(
            <Container>
                
                    {seats.map(({ seat, row, occupied }) => (
                        <Button
                            className="select"
                            size="lg"
                            color={occupied ? "primary" : "secondary"}
                            
                        >{seat}</Button>
                    ))}
                
            </Container>
        )
    }
}

export default SeatButton;