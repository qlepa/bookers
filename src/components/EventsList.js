import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../actions";

class EventsList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderList() {
    const sorted = this.props.events;
    if (this.props.sort === "ascending") {
      const sorted = this.props.events.sort(
        (a, b) => parseFloat(a.eventId) - parseFloat(b.eventId)
      );
    } else if (this.props.sort === "descending") {
      const sorted = this.props.events.sort(
      (a, b) => parseFloat(b.eventId) - parseFloat(a.eventId)
    );
    }
    
    switch (this.props.eventPlace) {
      case "poland":
        return sorted.map(event => {
          if (event.category2Name === 'Polska') {
          return (
            <div className="item" key={event.id}>
              <div className="content">
                <h3>
                  {event.eventName} {event.eventId}
                </h3>
                {event.eventGames[0].outcomes.map(i => (
                  <p>{i.outcomeOdds}</p>
                ))}
              </div>
            </div>
          );};
        });
      case "other":
        return sorted.map(event => {
          if (event.category2Name !== "Polska") {
            return (
              <div className="item" key={event.id}>
                <div className="content">
                  <h3>
                    {event.eventName} {event.eventId}
                  </h3>
                  {event.eventGames[0].outcomes.map(i => (
                    <p>{i.outcomeOdds}</p>
                  ))}
                </div>
              </div>
            );
          }
        });
      default:
    return sorted.map(event => {
      return (
        <div className="item" key={event.id}>
          <div className="content">
            <h3>
              {event.eventName} {event.eventId}
            </h3>
            {event.eventGames[0].outcomes.map(i => (
              <p>{i.outcomeOdds}</p>
            ))}
          </div>
        </div>
      );
    });
  }
  }

  render() {
    console.log(this.props.sort)
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { events: state.events };
};

export default connect(
  mapStateToProps,
  { fetchEvents }
)(EventsList);
