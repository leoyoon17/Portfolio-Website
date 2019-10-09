import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function FluidJumbotron () {
    return (
        <Jumbotron fluid>
            <h1> Fluid Jumbotron </h1>
            <p>
                Fluid Jumbotrons occupy the entire horizontal space of its parent.
            </p>
        </Jumbotron>
    );
}