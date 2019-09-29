import React, { Component } from 'react';
// bootstrap ref: https://getbootstrap.com/docs/4.0/components/navbar/


class NavBar extends Component {
  render() {
    const {n_counters} = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Balloon ^_^{" "}
          <span className="badge badge-pill badge-secondary">
            {n_counters}
          </span>
        </a>
      </nav>
    );
  }

}

export default NavBar;
