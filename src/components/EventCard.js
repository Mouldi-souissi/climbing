import React from "react";
// import moment from "moment";

const EventCard = ({ event }) => {
  //   const formattedDate = moment(event.date).calendar;
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
              <h6 className="text-muted">Destination: {event.destination}</h6>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text text-muted">{event.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
