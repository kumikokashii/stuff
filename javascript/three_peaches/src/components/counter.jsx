import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{fontSize: 27}} className="badge badge-primary m-2">{this.props.counter.value}</span>
        <button 
          className="btn btn-warning m-2"
          onClick={() => this.props.onPlusOne(this.props.counter)}
        >
          +1
        </button>
        <button 
          className="btn btn-outline-danger m-2"
          onClick={() => this.props.onMinusOne(this.props.counter)}
        >
          -1
        </button>
        <button 
          className="btn btn-info m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          deLete
        </button>
      </div>
    )

  }

}

export default Counter;
