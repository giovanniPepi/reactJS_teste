import logo from "./logo.svg";
import "./App.css";

import MyComponent from "./MyComponent";
import Clock from "./Clock";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    /* The reason we have to bind the this keyword when passing a function to another component is that it needs to stay in the same context in which it was declared. Always remember: you must bind this for all methods in class components when passing them to other components. */
    this.onClickBtn = this.onClickBtn.bind(this);

    this.state = {
      count: 0,
    };
  }

  onClickBtn() {
    console.log("button has been clicked!");
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  countDown() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <MyComponent title="React title" onButtonClicked={this.onClickBtn} />
        <button onClick={this.countUp}>Click to trigger counter up</button>
        <button onClick={(e) => this.countDown(e)}>
          Click to trigger counter dowm
        </button>
        <p>{this.state.count}</p>
        <Clock title="Current time: " />
      </div>
    );
  }
}

export default App;
