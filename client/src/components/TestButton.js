import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class TestButton extends Component {
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
            <ButtonGroup size="lg">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        );
    }

}

export default TestButton;