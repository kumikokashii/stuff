import React, { Component } from 'react';

class Counter extends Component {
  getValueClass = counter => {
    // diff. color for 0 or less.
    let classStr = "badge m-2 badge-";
    classStr += counter.value > 0 ? "primary" : "secondary";
    return classStr;
  }

  render() {
    const {counter, onPlusOne, onMinusOne, onDelete} = this.props;

    return (
      <div>
        <span style={{fontSize: 27}} className={this.getValueClass(counter)}>{counter.value}</span>
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
