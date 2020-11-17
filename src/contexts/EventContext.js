import React, { createContext, useState } from "react";
import axios from "axios";
export const EventContext = createContext();

const EventContextProvider = (props) => {
  const [events, setEvents] = useState([
    { date: "", name: "", destination: "", creator: { name: "" }, _id: "" },
  ]);

  // get all events
  const getEvents = () => {
    axios
      .get("http://localhost:5000/api/events", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setEvents(res.data);
      });
  };

  // create event
  const createEvent = (data) => {
    var date = new Date("2015-03-25T12:00:00Z");
    axios
      .post(
        "http://localhost:5000/api/events/add",
        { ...data, date: date },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
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
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <EventContext.Provider
      value={{ events, getEvents, createEvent, editEvent }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
