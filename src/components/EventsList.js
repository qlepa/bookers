import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../actions";

import ListCore from './ListCore';

class EventsList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  buildList(event) {
    return (
      //To powinien być oddzielny component
      <ListCore event={event} />
    );
  }

  sortedState() {
    if (this.props.sort === "ascending") {
      return (this.props.events.sort(
        (a, b) => parseFloat(a.eventStart) - parseFloat(b.eventStart)
      ));
    } else if (this.props.sort === "descending") {
      return (this.props.events.sort(
        (a, b) => parseFloat(b.eventStart) - parseFloat(a.eventStart)
      ));
    } else {
      return this.props.events;
    };
  }

  renderList() {
    const sorted = this.sortedState();
    
    switch (this.props.eventPlace) {
      case "poland":
        return sorted.map(event => {
          if (event.category2Name === "Polska") {
            return this.buildList(event)
          }
        });
      case "other":
        return sorted.map(event => {
          if (event.category2Name !== "Polska") {
            return this.buildList(event);
          }
        });
      default:
        return sorted.map(event => {
          return this.buildList(event);
        });
    };
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  };
};

const mapStateToProps = state => {
  return { events: state.events };
};

export default connect(
  mapStateToProps,
  { fetchEvents }
)(EventsList);
