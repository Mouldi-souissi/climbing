import React, { useContext, useEffect } from "react";
import EventCard from "../components/EventCard";
import { EventContext } from "../contexts/EventContext";

const Events = () => {
  const { getEvents, events } = useContext(EventContext);

  // get all events
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div className="container-fluid" style={{ marginTop: "80px" }}>
      <h2 className="text-center pt-5 mb-5">Events</h2>
      {events.map((event) => (
        <EventCard event={event} key={event._id} />
      ))}
    </div>
  );
};

export default Events;
