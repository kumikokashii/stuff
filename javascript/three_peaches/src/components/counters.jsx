import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      {id: 0, value: 789},
      {id: 1, value: 34},
      {id: 2, value: 99}
    ]
  }

  render() {
    return (
      <div>
        <button className="btn btn-dark m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter 
            key={counter.id}
            onPlusOne={this.handlePlusOne}
            onMinusOne={this.handleMinusOne}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    )
  }

  handlePlusOne = counter => {
    // Make a copy of the current counters
    // Only update the given counter's value
    // Just don't update the current counters or any of the individual counter
    let newCounters = [...this.state.counters];
    let i = this.state.counters.indexOf(counter);
    newCounters[i] = {...counter};
    newCounters[i].value += 1;

    this.setState({counters: newCounters});
  }

  handleMinusOne = counter => {
    // Make a copy of the current counters
    // Only update the given counter's value
    // Just don't update the current counters or any of the individual counter
    let newCounters = [...this.state.counters];
    let i = this.state.counters.indexOf(counter);
    newCounters[i] = {...counter};
    newCounters[i].value -= 1;

    this.setState({counters: newCounters});
  }

  handleDelete = counterId => {
    let newCounters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({counters: newCounters});
  }

  handleReset = () => {
    let newCounters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({counters: newCounters});
  }
}

export default Counters;
