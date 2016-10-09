import React, { Component } from 'react';
import logo from './logo.svg';
import Calculator from './Calculator.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Hello my name is Bobby Tu, and I am a second year student at the University
          of Waterloo
        </p>
        <p> Here is my basic calculator </p>
        <Calculator></Calculator>
      </div>
    );
  }
}

export default App;
