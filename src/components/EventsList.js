import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../actions";

class EventsList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  buildList(event) {
    return (
      <div className="item" key={event.id}>
        <div className="content">
          <div className="header">
            <h3>{event.eventName}</h3>
          </div>
          <div className="description">
            {event.eventGames[0].outcomes.map(i => (
              <p style={{ display: "inline-block", padding: "5px" }}>
                {i.outcomeOdds}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  renderList() {
    const sorted = this.props.events;
    if (this.props.sort === "ascending") {
      const sorted = this.props.events.sort(
        (a, b) => parseFloat(a.eventStart) - parseFloat(b.eventStart)
      );
    } else if (this.props.sort === "descending") {
      const sorted = this.props.events.sort(
        (a, b) => parseFloat(b.eventStart) - parseFloat(a.eventStart)
      );
    };

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
