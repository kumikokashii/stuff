import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
  render() {
    const {handleReset, counters, handlePlusOne, handleMinusOne, handleDelete} = this.props;

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
      </div>
    );
  }

}

export default Counters;
