import React, { Component } from 'react';

class Counter extends Component {
  state = {
    n: 3
  }

  render() {
    return (
      <div>
        <h1>U say goodbye, I say hi!</h1>
        <h3>{this.state.n} times ^_^</h3>
      </div>
    )
  }
}

export default Counter;
