import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  render() {
    return (
      <React.Fragment>  {/* Need it b/c more than 1 element */}
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }

}

export default App;
