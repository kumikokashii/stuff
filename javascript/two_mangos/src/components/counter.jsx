import React, { Component } from 'react';

class Counter extends Component {
  state = {
    n: 1,
    imageUrl: 'https://picsum.photos/500/300?grayscale'
  }

  render() {
    return (
      <div>
        <h1>U say goodbye, I say hi!</h1>
        <h3 style={{ fontSize: 17 }} className={this.getBadgeClasses()}>{this.state.n} times ^_^</h3><br/>
        <button className="btn btn-success btn-sml m-2">Go!</button><br/>
        <img src={this.state.imageUrl}/>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.n === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
