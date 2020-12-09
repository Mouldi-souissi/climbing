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
            {event.image ? (
              <img src={event.image} className="card-img" alt="event-pic" />
            ) : (
              <div
                className="card-img bg-dark d-flex align-items-center"
                style={{ height: "236px" }}
              >
                <p
                  className="mx-auto my-auto text-white"
                  style={{ fontSize: "13px" }}
                >
                  No image
                </p>
              </div>
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body flex-column">
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
              <h6 className="card-text align-self-end">
                Date:{" "}
                <span className="text-muted">
                  {moment(event.date).format("MMMM Do YYYY, h:mm a")}
                </span>
              </h6>
              {event.completed && (
                <span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
