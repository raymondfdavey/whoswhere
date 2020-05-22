import React, { Component } from "react";

class Toggler extends Component {
  state = { show: true };
  render() {
    return (
      <div>
        {show ? this.props.children : null}
        <button onClick={this.toggle}>{show ? "hide" : "show"}</button>}
      </div>
    );
  }
  toggle = () => {
    this.setState(function(currentState) {
      return { show: currentState.show };
    });
  };
}

export default Toggler;
