import React, { Component } from 'react';

class Counter extends Component {
  //constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  //}

  state = {
    n: 1,
    imageUrl: 'https://picsum.photos/500/300?grayscale',
    tags: ['tetris', 'mario', 'zelda']
  }

  render() {
    return (
      <div>
        <h1>U say goodbye, I say hi!</h1>
        <h3 style={{ fontSize: 17 }} className={this.getBadgeClasses()}>{this.state.n} times ^_^</h3><br/>
        <button 
          onClick={this.handleIncrement}
          className="btn btn-success btn-sml m-2"
        >
          Go!
        </button><br/>

        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>

        <img src={this.state.imageUrl}/>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.n === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ n: this.state.n + 1 })
  }
}

export default Counter;
