import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  modify = (n) => {
    this.setState((current) => {
      return {
        count: n,
      };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        {count}
        <button onClick={() => this.modify(count + 1)}>Increment</button>
      </div>
    );
  }
}

export default App;
