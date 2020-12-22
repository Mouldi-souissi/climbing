import React, { useContext, useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { EventContext } from "../contexts/EventContext";
import Bonus from "../components/Bonus";
import { Link } from "react-router-dom";
import eventA from "../assets/animation.gif";
import SearchBar from "../components/SearchBar";
import moment from "moment";

const Events = () => {
  const { getEvents, events } = useContext(EventContext);
  const [filter, setFilter] = useState("");

  //filtering events completed/upcoming
  const completed = events.filter((event) => event.completed);
  const upcoming = events.filter((event) => !event.completed);

  // filters
  let filtered = completed;

  if (filter === "toprated") {
    filtered = completed.sort(
      (a, b) => new moment(b.rating.result) - new moment(a.rating.result)
    );
  }
  if (filter === "mounth") {
    filtered = completed.filter(
      (event) => moment(new Date()).diff(event.date, "days") < 30
    );
  }
  if (filter === "year") {
    filtered = completed.filter(
      (event) =>
        moment(new Date()).diff(event.date, "years") > 1 &&
        moment(new Date()).diff(event.date, "years") < 2
    );
  }

  // get all events
  useEffect(() => {
    getEvents();
  }, [getEvents]);
  return (
    <div className="container events" style={{ marginTop: "80px" }}>
      {/* header */}
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
      {/* nav tab */}
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
      {/* tab content */}
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
            {upcoming.map((event) => (
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
            {filter && (
              <button
                className="btn btn-danger mr-2"
                onClick={() => setFilter("")}
              >
                Reset
              </button>
            )}

            <button
              className={`btn ${
                filter === "toprated"
                  ? "btn-secondary"
                  : "btn-outline-secondary"
              } mr-2`}
              onClick={() => setFilter("toprated")}
            >
              Top rated
            </button>
            <button
              className={`btn ${
                filter === "mounth" ? "btn-secondary" : "btn-outline-secondary"
              } mr-2`}
              onClick={() => setFilter("mounth")}
            >
              Last month
            </button>
            <button
              className={`btn ${
                filter === "year" ? "btn-secondary" : "btn-outline-secondary"
              } mr-2`}
              onClick={() => setFilter("year")}
            >
              Last year
            </button>
          </div>
          <hr />
          {filtered.map((event) => (
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
