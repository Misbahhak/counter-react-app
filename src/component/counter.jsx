import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        {" "}
        <span className={this.getbadgeclasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm"> Increment </button>{" "}
      </React.Fragment>
    );
  }

  getbadgeclasses() {
    let classes = "badge rounded-pill m2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
