import React, { Component } from 'react';

export default class SimpleClock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <span className="menu navigation-menu"> {this.state.date.toLocaleTimeString() } </span>
        );
    }
}