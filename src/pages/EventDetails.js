import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import jwtDecode from "jwt-decode";
import { EventContext } from "../contexts/EventContext";

const EventDetails = () => {
  // get event from the link
  const event = useHistory().location.state;

  //   check owner
  const actualUser =
    localStorage.getItem("token") &&
    jwtDecode(localStorage.getItem("token")).id;
  const eventUserId = event.creator._id;
  const isOwner = eventUserId === actualUser ? true : false;

  // context
  const { participate } = useContext(EventContext);

  // paticipants;
  const sure = event.participants.filter((event) => event.will === "sure");
  const maybe = event.participants.filter((event) => event.will === "maybe");

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <p className="pt-5 display-3 text-center">{event.name}</p>
      <Link
        to={`/profile${event.creator._id}`}
        style={{ textDecoration: "none" }}
      >
        <h4 className="text-muted text-center by">by {event.creator.name}</h4>
      </Link>
      <h6>
        Destination: <span className="text-muted">{event.destination}</span>
      </h6>
      <h6>
        Date:{" "}
        <span className="text-muted">
          {moment(event.date).format("MMMM Do YYYY, h:mm a")}
        </span>
      </h6>
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
      <div className="card-body">
        <p className="mt-5">{event.description}</p>
        <div className="d-flex align-items-center mt-3 mb-5">
          <div className="mr-3">{sure.length} for sure</div>
          <div className="mr-5">{maybe.length} maybe</div>
          <button
            className="btn btn-outline-primary mr-2"
            onClick={() => participate(event._id, { will: "sure" })}
          >
            Participate
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => participate(event._id, { will: "maybe" })}
          >
            Maybe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
