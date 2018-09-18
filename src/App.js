import React, { Component } from "react";
import "./App.css";
import LeftChild from "./components/LeftChild";
import RightChild from "./components/RightChild";

class App extends Component {
  constructor() {
    super()
    this.state = { counter: 0 }
    this.increment = this.increment.bind(this) 
    this.decrement = this.decrement.bind(this) 
  }
  increment (event) {
    console.log('this: ', this)
    this.setState({ counter: this.state.counter + 1 })
  }
  decrement () {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    console.log(' state: ', this.state)
    return (
      <div className="App">
        <div className="controls">
          <h3> parent component </h3>
          <p> ¯\_(ツ)_/¯ </p>
        </div>
        <LeftChild  counter={ this.state.counter }/>
        <RightChild increment={this.increment} decrement={this.decrement}/>
      </div>
    );
  }
}

export default App;
