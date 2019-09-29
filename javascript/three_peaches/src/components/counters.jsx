import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
  render() {
    const {handleReset, counters, handlePlusOne, handleMinusOne, handleDelete, handleAdd} = this.props;

    return (
      <div>
        <button className="btn btn-dark m-2" onClick={handleReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter 
            key={counter.id}
            onPlusOne={handlePlusOne}
            onMinusOne={handleMinusOne}
            onDelete={handleDelete}
            counter={counter}
          />
        ))}
        <button className="btn btn-danger m-2" onClick={handleAdd}>
          +
        </button>
      </div>
    );
  }

}

export default Counters;
