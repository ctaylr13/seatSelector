import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class SeatButton extends Component {
    
    state = {
        selected: false
        // selected: this.props.occupied
    }


    clicked = () => {
        console.log("clicked yo");
        this.setState({
            selected: !this.state.Selected
        })
    };



    render() {
        const { seat, occupied, margin } = this.props; 
        const { selected } = this.state;
        console.log(this.state.selected);
        
        /*onClick={this.onSelectClick()}*/
    

        return(
            <Button
                className="select"
                size="md"
                color={selected ? "danger" : (occupied ? "primary" : "secondary") }
                disabled={occupied ? true : false}
                style={{marginRight: margin ? 10 : 0}}
                onClick={this.clicked}
                active={selected ? true : false}
            >{seat}</Button>
        );
    }

    
}

export default SeatButton;