import React, { Component, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function DismissibleAlert() {
    const [show,setShow] = useState(true);

    return (
        <Container>
            <Alert show={show} variant="success">
                <Alert.Heading> How's it going?</Alert.Heading>
                <p>
                    Something for nothing
                </p>
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close Me
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}> Show Alert</Button>}
        </Container>
    )
}

