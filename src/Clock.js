import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const title = this.props.title;

    return (
      <div>
        <div>{title}</div>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;
