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
  return (
    <EventContext.Provider value={{ events, getEvents }}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
