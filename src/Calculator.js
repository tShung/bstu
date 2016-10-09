import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
      super();
      this.state = {
        result: 0,
        value: 0,
        value2: 0,
        operatorClicked: false
      };
      this.operatorClicked = this.operatorClicked.bind(this);
      this.equalClicked = this.equalClicked.bind(this);
  }

  operatorClicked() {
    this.setState({operatorClicked: true});
  }

  equalClicked() {
    this.setState({result: this.state.value + this.state.value2});
  }

  numberClicked(x) {
    if (!this.state.operatorClicked) {
      this.setState({value: x});  
    } else {
      this.setState({value2: x});
    }

    this.setState({result: x});
  }

  render() {
    return (
      <div className="Calculator">
        <p>Calculator</p>
        <table className="Calculator-Panel">
          <tr>
            <button onClick={() => {this.numberClicked(1)}}>1</button>
            <button onClick={() => {this.numberClicked(2)}}>2</button>
            <button onClick={() => {this.numberClicked(3)}}>3</button>
          </tr>
          <tr>
            <button onClick={() => {this.numberClicked(4)}}>4</button>
            <button onClick={() => {this.numberClicked(5)}}>5</button>
            <button onClick={() => {this.numberClicked(6)}}>6</button>
          </tr>
          <tr>
            <button onClick={() => {this.numberClicked(7)}}>7</button>
            <button onClick={() => {this.numberClicked(8)}}>8</button>
            <button onClick={() => {this.numberClicked(9)}}>9</button>
          </tr>
          <tr>
            <button onClick={() => {this.numberClicked(0)}}>0</button>
            <button onClick={this.operatorClicked}>+</button>
            <button onClick={this.equalClicked}>=</button>
          </tr>
          <input type="number" value={this.state.result}/>
        </table>
      </div>
    );
  }
}

export default Calculator;
