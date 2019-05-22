import React, { Component } from "react";
import EventsList from "./EventsList";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { eventVars, sortVars } from './vars';

class App extends Component {
  state = { eventPlace: "none" };

  setPlace = (place) => {
    this.setState({ eventPlace: eventVars[place]});
  };

  render() {
    return (
      <div className="ui container">
        <div style={{ padding: "10px" }}>
          <button
            className="ui button"
            onClick={() => this.setPlace("placePoland")}
          >
            Poland
          </button>
          <button
            className="ui button"
            onClick={() => this.setPlace("placeOther")}
          >
            Rest of World
          </button>
          <button
            className="ui button"
            onClick={() => this.setPlace("placeDefault")}
          >
            Reset
          </button>
        </div>
        <BrowserRouter>
          <div style={{ marginLeft: "10px" }}>
            <p style={{ display: "inline-block" }}>Sort by date:</p>
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
