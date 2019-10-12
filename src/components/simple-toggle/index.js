import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import SimpleClock from '../simple-clock';

export default class SimpleToggle extends Component {
    constructor(props) {
        super(props);
        this.state= { isToggleOn: true };

        // This binding is necessary to make 'this' work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <Button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Show Current Time' : <SimpleClock/>}
            </Button>
        )
    }
}