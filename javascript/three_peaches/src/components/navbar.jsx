import React, { Component } from 'react';
// bootstrap ref: https://getbootstrap.com/docs/4.0/components/navbar/


class NavBar extends Component {
  render() {
    const {n_counters, sum_counter_values} = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Balloon ^_^{" "}
          <span className="badge badge-pill badge-secondary">
            {n_counters}
          </span>
          <span>{" "}</span>
          Go *_*{" "}
          <span className="badge badge-pill badge-secondary">
            {sum_counter_values}
          </span>
        </a>
      </nav>
    );
  }

}

export default NavBar;
