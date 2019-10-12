import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SimpleToggle from '../simple-toggle';

export default function FluidJumbotron () {
    return (
        <Jumbotron fluid>
            <h1> Jae-yeon Yoon </h1>
            <p>
                Software developer in training.
            </p>
            <br/>
            <SimpleToggle/>
        </Jumbotron>
    );
}