import React, { useContext, useEffect } from "react";
import EventCard from "../components/EventCard";
import { EventContext } from "../contexts/EventContext";
import Bonus from "../components/Bonus";
import { Link } from "react-router-dom";
import eventA from "../assets/animation.gif";
import SearchBar from "../components/SearchBar";

const Events = () => {
  const { getEvents, events } = useContext(EventContext);

  // get all events
  useEffect(() => {
    getEvents();
  }, [getEvents]);
  return (
    <div className="container events" style={{ marginTop: "80px" }}>
      <h2 className="pt-5">Events</h2>

      <Bonus />
      <div className="d-flex align-items-end mt-3">
        <img
          alt="anim"
          src={eventA}
          height="200px"
          className="d-none d-lg-block"
        />
        <SearchBar showDog={false} />
      </div>
      <ul className="nav nav-tabs pt-3 mb-5" role="tablist">
        <li className="nav-item" role="presentation">
          <div
            className="text-muted nav-link active"
            data-toggle="tab"
            href="#upcoming"
            role="tab"
            style={{ fontSize: "20px" }}
          >
            <i className="fa fa-clock-o mr-2" />
            Upcoming
          </div>
        </li>

        <li className="nav-item" role="presentation">
          <div
            className="text-muted nav-link"
            data-toggle="tab"
            href="#completed"
            role="tab"
            style={{ fontSize: "20px" }}
          >
            <i className="fa fa-check mr-2" />
            Finished
          </div>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="upcoming"
          role="tabpanel"
        >
          <hr />
          <hr />
          <div className="row ml-3 align-items-center">
            <h4 className="col-lg-3">
              <i className="fa fa-filter col-3"></i> Filters
            </h4>
            <button className="btn btn-outline-secondary mr-2">
              This week
            </button>
            <button className="btn btn-outline-secondary mr-2">
              This mounth
            </button>
            <button className="btn btn-outline-secondary">This year</button>
          </div>
          <hr />

          <div className="mt-4">
            {events
              .filter((event) => !event.completed)
              .map((event) => (
                <Link
                  to={{ pathname: `/events/${event._id}` }}
                  key={event._id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <EventCard event={event} />
                </Link>
              ))}
          </div>
        </div>
        <div className="tab-pane fade" id="completed" role="tabpanel">
          <hr />
          <div className="row ml-3 align-items-center">
            <h4 className="col-lg-3">
              <i className="fa fa-filter col-3"></i> Filters
            </h4>
            <button className="btn btn-outline-secondary mr-2">
              Top rated
            </button>
            <button className="btn btn-outline-secondary mr-2">
              Last month
            </button>
            <button className="btn btn-outline-secondary">Last year</button>
          </div>
          <hr />
          {events
            .filter((event) => event.completed)
            .map((event) => (
              <Link
                to={{ pathname: `/events/${event._id}`, state: event }}
                key={event._id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <EventCard event={event} key={event._id} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
