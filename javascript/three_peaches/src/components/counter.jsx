import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const {counter, onPlusOne, onMinusOne, onDelete} = this.props;

    return (
      <div>
        <span style={{fontSize: 27}} className="badge badge-primary m-2">{counter.value}</span>
        <button 
          className="btn btn-warning m-2"
          onClick={() => onPlusOne(counter)}
        >
          +1
        </button>
        <button 
          className="btn btn-outline-danger m-2"
          onClick={() => onMinusOne(counter)}
        >
          -1
        </button>
        <button 
          className="btn btn-info m-2"
          onClick={() => onDelete(counter.id)}
        >
          deLete
        </button>
      </div>
    )

  }

}

export default Counter;
