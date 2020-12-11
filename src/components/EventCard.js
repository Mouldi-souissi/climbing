import React from "react";
import moment from "moment";

const EventCard = ({ event }) => {
  return (
    <div className="col-md-12 mb-3 events">
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
            <div className="card-body">
              <h5 className="card-title mb-4">
                {event.name}
                <span className="text-secondary text-sm ml-2">
                  by {event.creator.name}
                </span>
              </h5>
              <div className="row mb-1">
                <h6 className="col-md-6 mb-3">
                  <div className="d-flex align-items-center text-muted">
                    <i className="fa fa-map-marker text-success event-icon mr-3 ml-1" />
                    <div>{event.destination}</div>
                  </div>
                </h6>
                <h6 className="col-md-6 mb-3">
                  <div className="d-flex align-items-center text-muted">
                    <i className="fa fa-calendar text-success event-icon mr-3" />
                    <div className="">
                      {moment(event.date).format("MMMM Do YYYY, h:mm a")}
                    </div>
                  </div>
                </h6>
                <h6 className="col-md-6 mb-3">
                  <div className="d-flex align-items-center text-muted">
                    <i className="fa fa-user-o text-success event-icon mr-3" />
                    <div className="">8/50</div>
                  </div>
                </h6>
                <h6 className="col-md-6 mb-3">
                  <div className="d-flex align-items-center text-muted">
                    <i className="fa fa-usd text-success event-icon mr-3 ml-1" />
                    <div className="">30 TND</div>
                  </div>
                </h6>
              </div>

              {event.completed && (
                <span className="rate">
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
