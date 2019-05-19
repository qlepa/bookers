import React from "react";
import { connect } from "react-redux";
import { fetchEvents } from "../actions";

class EventsList extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderList() {
    return this.props.events.map(event => {
      return (
        <div className="item" key={event.id}>
          <div className="content">
            <h3>{event.eventName}</h3>
            {event.eventGames[0].outcomes.map(i => (
              <p>{i.outcomeOdds}</p>
            ))}
          </div>
        </div>
      );
    });
  }

  render() {
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
