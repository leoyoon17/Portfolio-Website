import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import Container from 'react-bootstrap/Container';
import FluidJumbotron from './components/simple-jumbotron';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <FluidJumbotron/>
      
    </div>
  );
}

export default App;
