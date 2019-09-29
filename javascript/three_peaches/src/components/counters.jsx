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
        {this.state.counters.map(counter => (<Counter key={counter.id} value={counter.value} />))}
      </div>
    )
  }
}

export default Counters;
