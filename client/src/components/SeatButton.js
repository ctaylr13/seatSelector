import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class SeatButton extends Component {
    state = {
        seats: [
            {seat:"A", row:1, class:"First", occupied:false },
            {seat:"B", row:1, class:"First", occupied:false },
            {seat:"D", row:1, class:"First", occupied:true },
            {seat:"E", row:1, class:"First", occupied:false },
        ]
    }

    render() {
        const { seats } = this.state;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="seat-list">
                        {seats.map(({ seat, row }) => (
                            <ListGroupItem>
                                <Button
                                    className="select"
                                    color="danger"
                                    size="sm"
                                >&times;</Button>
                                {seat}
                            </ListGroupItem>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default SeatButton;