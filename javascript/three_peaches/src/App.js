import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  state = {
    counters: [
      {id: 0, value: 789},
      {id: 1, value: 34},
      {id: 2, value: 99}
    ]
  }

  get_sum_counter_values = () => {
    console.log("hihihihi!");
    let s = 0;
    for (let counter in this.state.counters) {
      s += counter.value;
    }
    return s;
  }

  render() {
    return (
      <React.Fragment>  {/* Need it b/c more than 1 element */}
        <NavBar 
          n_counters={this.state.counters.filter(counter => counter.value > 0).length}
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            handleReset={this.handleReset}
            handlePlusOne={this.handlePlusOne}
            handleMinusOne={this.handleMinusOne}
            handleDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handlePlusOne = counter => {
    // Make a copy of the current counters
    // Only update the given counter's value
    // Just don't update the current counters or any of the individual counters
    let newCounters = [...this.state.counters];
    let i = this.state.counters.indexOf(counter);
    newCounters[i] = {...counter};
    newCounters[i].value += 1;

    this.setState({counters: newCounters});
  }

  handleMinusOne = counter => {
    // Make a copy of the current counters
    // Only update the given counter's value
    // Just don't update the current counters or any of the individual counters
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

export default App;
