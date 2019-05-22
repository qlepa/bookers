import React, { Component } from "react";
import EventsList from "./EventsList";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  state = { eventPlace: "none" };

  //Powinna być jedna metoda do której przekazuję argument
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
        <div style={{ padding: "10px" }}>
          <button className="ui button" onClick={this.setPoland}>
            Poland
          </button>
          <button className="ui button" onClick={this.setRow}>
            Rest of World
          </button>
          <button className="ui button" onClick={this.setReset}>
            Reset
          </button>
        </div>
        <BrowserRouter>
          <div style={{ marginLeft: "10px" }}>
            <p style={{ display: 'inline-block' }}>Sort by date:</p>
            <Link to="/ascending" style={{ padding: "5px" }}>
              Ascending
            </Link>
            <Link to="/descending" style={{ padding: "5px" }}>
              Descending
            </Link>
          </div>
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
