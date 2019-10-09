import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    
    return (
        <Navbar sticky='top' bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' Jae-yeon Yoon'}
            </Navbar.Brand>
        </Navbar>
    );
}