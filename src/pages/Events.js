import React, { useContext, useEffect } from "react";
import EventCard from "../components/EventCard";
import { EventContext } from "../contexts/EventContext";
import Bonus from "../components/Bonus";
import { Link } from "react-router-dom";
const Events = () => {
  const { getEvents, events } = useContext(EventContext);

  // get all events
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div className="container events" style={{ marginTop: "80px" }}>
      <h2 className="pt-5">Events</h2>
      <Bonus />

      <ul className="nav nav-tabs pt-3 mb-5" role="tablist">
        <li class="nav-item" role="presentation">
          <div
            className="text-muted nav-link active"
            data-toggle="tab"
            href="#upcoming"
            role="tab"
          >
            <i class="fa fa-clock-o mr-2" />
            Upcoming
          </div>
        </li>

        <li class="nav-item" role="presentation">
          <div
            className="text-muted nav-link"
            data-toggle="tab"
            href="#completed"
            role="tab"
          >
            <i class="fa fa-check mr-2" />
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
        <div className="tab-pane fade" id="completed" role="tabpanel">
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
