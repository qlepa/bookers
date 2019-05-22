import React from "react";

const ListCore = ({ event }) => {
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
};

export default ListCore;