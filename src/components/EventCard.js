import React from "react";
import moment from "moment";

const EventCard = ({ event }) => {
  // text limiting ...
  const textLimit = (text) => {
    const limit = 200;
    if (text.length > limit) {
      return text.substring(0, limit).concat("...");
    } else {
      return text;
    }
  };
  return (
    <div className="col-md-12 mb-3">
      <div className="card shadow-sm p-4" style={{ borderRadius: "20px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={event.image} className="card-img" alt="event-pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {event.name}
                <span className="text-secondary text-sm ml-2">
                  by {event.creator.name}
                </span>
              </h5>

              <h6>
                Destination:{" "}
                <span className="text-muted">{event.destination}</span>
              </h6>

              <p className="card-text">
                {event.description && textLimit(event.description)}
              </p>
              <h6 className="card-text">
                Date:{" "}
                <span class="text-muted">
                  {moment(event.date).format("MMMM Do YYYY, h:mm a")}
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
