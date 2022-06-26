import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    console.log("props");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
      initializing: true,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("Component did mount");
    setTimeout(() => {
      this.setState({ initializing: false });
    }, Math.random() * 1000);
    console.log("------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    console.log("------------------");
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("should component update - DO NOT RENDER");
      return false;
    }
    console.log("should component update - RENDER!");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get snapshot before update");
    return null;
  }

  render() {
    console.log("render");

    if (this.state.initializing) {
      return <div>Initializing....</div>;
    }

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
    console.log("------------------");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    console.log("------------------");
  }
}

export default Counter;
