import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import jwtDecode from "jwt-decode";
import { EventContext } from "../contexts/EventContext";
import EventDelete from "../components/EventDelete";

const EventDetails = () => {
  // state
  // const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  // context
  const { participate, getEvent, event, rateEvent } = useContext(EventContext);

  // get id from params
  const { id } = useParams();

  // get event by id
  useEffect(() => {
    getEvent(id);
  }, [id, getEvent]);

  // paticipants;
  const sure = event.participants.filter((event) => event.will === "sure");
  const maybe = event.participants.filter((event) => event.will === "maybe");

  //   check owner
  const actualUser =
    localStorage.getItem("token") &&
    jwtDecode(localStorage.getItem("token")).id;
  const eventUserId = event.creator._id;
  const isOwner = eventUserId === actualUser ? true : false;

  // check if the user is the paritipants list
  const participant = event.participants.find(
    (participant) => participant.user._id === actualUser
  )
    ? true
    : false;

  // rating
  const handleRating = (i) => {
    // setRating(i + 1);
    rateEvent(id, i + 1);
  };

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <EventDelete id={event._id} />
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
      {event.image ? (
        <img className="card-img mt-3 mb-3" alt="event-pic" src={event.image} />
      ) : (
        <div
          className="card-img mt-3 mb-3 bg-dark d-flex align-items-center"
          style={{ height: "500px" }}
        >
          <p className="mx-auto my-auto text-white">No image</p>
        </div>
      )}
      <div className="d-flex align-items-baseline justify-content-between mt-2 ml-2">
        {event.completed && (
          <div className="d-flex align-items-baseline">
            {[...Array(5)].map((star, i) => (
              <label key={i}>
                <input
                  type="radio"
                  className="starInput"
                  onClick={() => handleRating(i)}
                />
                <i
                  className="fa fa-star star"
                  rating={i + 1}
                  style={{
                    color:
                      i + 1 <= (hover || Math.round(event.rating.result))
                        ? "orange"
                        : "grey",
                  }}
                  onMouseEnter={() => setHover(i + 1)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            ))}
            <h5 className="ml-3">{Math.round(event.rating.result)}/5</h5>
          </div>
        )}
        {isOwner && (
          <div className="btn-group dropleft float-right">
            <button
              type="button"
              className="btn btn-transparent"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                className="fa fa-cog settingsIcon img-fluid"
                aria-hidden="true"
              />
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
                data-target="#deleteEvent"
              >
                <i className="fa fa-trash-o mr-2 pb-2" />
                Delete Event
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card-body">
        <p className="mt-5">{event.description}</p>
        {!event.completed && (
          <div className="d-flex align-items-center mt-3 mb-5">
            <div className="mr-3">
              <i className="fa fa-check mr-2 text-primary" aria-hidden="true" />
              {sure.length} sure{" "}
            </div>
            <div className="mr-5">
              <i
                className="fa fa-question mr-2 text-primary"
                aria-hidden="true"
              />
              {maybe.length} maybe{" "}
            </div>

            <button
              className="btn btn-outline-primary mr-2"
              onClick={() => participate(event._id, { will: "sure" })}
            >
              {participant ? "unparticipate" : "Participate"}
            </button>
            {!participant && (
              <button
                className="btn btn-outline-primary"
                onClick={() => participate(event._id, { will: "maybe" })}
              >
                Maybe
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
