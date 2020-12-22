import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const EventContext = createContext();

const EventContextProvider = (props) => {
  const [events, setEvents] = useState([
    { date: "", name: "", destination: "", creator: { name: "" }, _id: "" },
  ]);
  const [event, setEvent] = useState({
    date: "",
    name: "",
    destination: "",
    creator: { name: "" },
    _id: "",
    participants: [],
    rating: 0,
  });

  // get all events
  const getEvents = useCallback(() => {
    axios
      .get("http://localhost:5000/api/events", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setEvents(res.data);
      });
  }, []);

  // get event by id
  const getEvent = useCallback((id) => {
    axios
      .get(`http://localhost:5000/api/events/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => setEvent(res.data))
      .catch((err) => console.log(err));
  }, []);

  // create event
  const createEvent = (data) => {
    axios
      .post("http://localhost:5000/api/events/add", data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // edit event
  const editEvent = (id, data) => {
    axios
      .put(`http://localhost:5000/api/events/edit${id}`, data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setEvent(res.data);
      })
      .catch((err) => console.log(err));
  };

  // participate unparticipate
  const participate = (id, will) => {
    axios
      .put(`http://localhost:5000/api/events/participate${id}`, will, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) =>
        //  setEvent(res.data)
        getEvent(id)
      )
      .catch((err) => console.log(err));
  };

  // delete event
  const deleteEvent = (id) => {
    axios
      .delete(`http://localhost:5000/api/events/delete${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // rate event
  const rateEvent = (id, rating) => {
    axios
      .put(
        `http://localhost:5000/api/events/rate${id}`,
        { rating },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        console.log("done");
      })
      .catch((err) => console.log(err));
  };

  return (
    <EventContext.Provider
      value={{
        events,
        event,
        getEvents,
        getEvent,
        createEvent,
        editEvent,
        participate,
        deleteEvent,
        rateEvent,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
