import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value
  }

  render() {
    return (
      <div>
        <span className="btn btn-primary btn-lg">{this.state.value}</span>
        <button 
          className="btn btn-info btn-lg m-2"
          onClick={this.plusOne}
        >
          +1
        </button>
      </div>
    )

  }

  plusOne = () => {
    this.setState({value: this.state.value + 1})
  }
}

export default Counter;
