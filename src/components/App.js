import React, { Component } from "react";
import EventsList from "./EventsList";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <BrowserRouter>
            <Link to="/ascending">Ascending</Link>
            <Link to="/descending">Descending</Link>
            <Route
              exact
              path="/"
              render={props => (
                <EventsList eventPlace={this.state.eventPlace} />
              )}
            />
            <Route
              exact
              path="/ascending"
              render={props => (
                <EventsList
                  eventPlace={this.state.eventPlace}
                  sort="ascending"
                />
              )}
            />
            <Route
              exact
              path="/descending"
              render={props => (
                <EventsList
                  eventPlace={this.state.eventPlace}
                  sort="descending"
                />
              )}
            />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
