import React from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import jwtDecode from "jwt-decode";

const EventDetails = () => {
  // get event from the link
  const event = useHistory().location.state;
  //   check owner
  const actualUser =
    localStorage.getItem("token") &&
    jwtDecode(localStorage.getItem("token")).id;
  const eventUserId = event.creator._id;
  const isOwner = eventUserId === actualUser ? true : false;

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <p className="pt-5 display-2 text-center">
        {event.name}
        <span className="text-muted ml-2" style={{ fontSize: "40px" }}>
          by {event.creator.name}
        </span>
      </p>
      <h4>
        Destination: <span className="text-muted">{event.destination}</span>
      </h4>
      <h4>
        Date:{" "}
        <span className="text-muted">
          {moment(event.date).format("MMMM Do YYYY, h:mm a")}
        </span>
      </h4>
      <img className="card-img mt-3 mb-3" alt="event-pic" src={event.image} />
      {isOwner && (
        <div className="btn-group dropleft float-right">
          <button
            type="button"
            className="btn btn-transparent"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-cog fa-2x shadowIcon" aria-hidden="true" />
          </button>
          <div className="dropdown-menu p-0 shadow-sm">
            <Link
              to={{
                pathname: `/addEvent${event._id}`,
                state: { isEditing: true, event },
              }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="dropdown-item">
                <i className="fa fa-pencil-square-o mr-2 pt-2" />
                Edit Event
              </div>
            </Link>
            <hr className="my-1 py-0" />
            <div
              className="dropdown-item btn"
              data-toggle="modal"
              data-target={`#${event.name}`}
            >
              <i className="fa fa-trash-o mr-2 pb-2" />
              Delete Event
            </div>
          </div>
        </div>
      )}
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetails;
