import React, { Component } from "react";
import EventsList from "./EventsList";

class App extends Component {
  state = { eventPlace: "none" };

  setPoland = () => {
    this.setState({ eventPlace: "poland" });
  };
  setRow = () => {
    this.setState({ eventPlace: "other" });
  };
  setReset = () => {
    this.setState({ eventPlace: "none" });
  };

  render() {
    return (
      <div className="ui container">
        <div className="buttons">
          <button onClick={this.setPoland}>Poland</button>
          <button onClick={this.setRow}>Rest of World</button>
          <button onClick={this.setReset}>Reset</button>
        </div>
        <EventsList eventPlace={this.state.eventPlace} />
      </div>
    );
  }
}

export default App;
