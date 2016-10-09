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
      this.numberClicked = this.numberClicked.bind(this);
  }

  operatorClicked() {
    this.setState({operatorClicked: true});
  }

  equalClicked() {
    this.setState({result: this.state.value + this.state.value2});
  }

  numberClicked(x) {
    console.log (x);
    if (!this.state.operatorClicked) {
      this.setState({value: x});  
    } else {
      this.setState({value2: x});
    }

    this.setState({result: x});
  }

  render() {
    var rows = [];
    for (var i = 1; i < 10; i += 3) {
      (function (index, that){
        rows.push(
          <tr>
            <button onClick={() => {that.numberClicked(index)}}>{index}</button>
            <button onClick={() => {that.numberClicked(index + 1)}}>{index + 1}</button>
            <button onClick={() => {that.numberClicked(index + 2)}}>{index + 2}</button>
          </tr>
        );
      })(i,this);
    }
    return (
      <div className="Calculator">
        <p>Calculator</p>
        <table className="Calculator-Panel">
          {rows}
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
