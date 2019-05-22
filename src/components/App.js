import React, { Component } from "react";
import EventsList from "./EventsList";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { eventVars, sortVars } from './vars';

class App extends Component {
  state = { eventPlace: "none" };

  //TODO Powinna być jedna metoda do której przekazuję argument
  setPoland = () => {
    this.setState({ eventPlace: eventVars.placePoland });
  };
  setRow = () => {
    this.setState({ eventPlace: eventVars.placeOther });
  };
  setReset = () => {
    this.setState({ eventPlace: eventVars.placeDefault });
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
                sort={sortVars.ascending}
              />
            )}
          />
          <Route
            exact
            path="/descending"
            render={props => (
              <EventsList
                eventPlace={this.state.eventPlace}
                sort={sortVars.descending}
              />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
