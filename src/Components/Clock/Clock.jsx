import React, { Component } from "react";
import clockImg from "../../img/clock.jpg";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5 d-flex justify-content-center">
          <p className="fw-bold">
            Time now is {this.state.date.toLocaleTimeString()}.
          </p>
          <img src={clockImg} alt="old clock" className="img-fluid" />
        </div>
      </React.Fragment>
    );
  }
  // set up a timer whenever the Clock is rendered to the DOM for the first time
  componentDidMount() {
    //the timer ID right on this
    this.timerID = setInterval(() => this.Tick(), 1000);
  }
  //clear that timer whenever the DOM produced by the Clock is removed
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  Tick() {
    this.setState({
      date: new Date(),
    });
  }
}

export default Clock;
