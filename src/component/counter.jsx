import React, { Component } from "react";

class Counter extends Component {
  // ******************** The Under function can be used for binding instead of  handleIncrement = () =>
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  render() {
    // console.log(this.props);  ** for prop children
    return (
      <div>
        {" "}
        <span className={this.getbadgeclasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Increment{" "}
        </button>{" "}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete
        </button>
      </div>
    );
  }

  getbadgeclasses() {
    let classes = "badge rounded-pill m2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
