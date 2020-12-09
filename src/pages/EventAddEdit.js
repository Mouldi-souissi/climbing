import React, { useContext, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useHistory, useParams, Redirect } from "react-router-dom";
import Bonus from "../components/Bonus";
import { EventContext } from "../contexts/EventContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

var _ = require("lodash");

function EventAddEdit() {
  // state
  let [data, setData] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  // id from params
  const { id } = useParams();

  // context
  const { createEvent, editEvent } = useContext(EventContext);

  // checking if editing
  const isEditing = useHistory().location.state.isEditing;
  const event = useHistory().location.state.event;

  // handling form
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // handle create or edit
  const handleCreateOrEdit = () => {
    if (isEditing) {
      // clean object from unmodified fields
      const modified = _.omit(data, _.isUndefined);
      // edit
      editEvent(id, modified);
      setData("");
      setRedirect(true);
    } else {
      const copy = { ...data, date: startDate };
      createEvent(copy);
      setData("");
    }
  };

  // getting post data if editing
  //   useEffect(() => {
  //     if (isEditing) {
  //       getPostById(id);
  //     }
  //   }, []);
  if (redirect) {
    return <Redirect to={{ pathname: `/events/${id}`, state: event }} />;
  }
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-lg-12  mb-5" style={{ borderRadius: "20px" }}>
          <div className="card-body">
            <h2 className="card-title">
              {isEditing ? "Edit" : "Create"} Event
            </h2>
            <Bonus />
            <div className="form-group mt-5">
              <label>Name</label>
              <input
                defaultValue={isEditing ? event.name : ""}
                type="text"
                className="form-control col-lg-6"
                name="name"
                onChange={handleInput}
              />
            </div>
            <div className="form-group mt-3">
              <label>Date</label>
              <div className="form-control col-lg-6 datetime">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  customInput={<input style={{ border: "none" }} />}
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <label>Image Url</label>
              <input
                defaultValue={isEditing ? event.image : ""}
                type="text"
                className="form-control col-lg-6"
                onChange={handleInput}
                name="image"
              />
            </div>

            {data.image && (
              <img src={data.image} alt="img preview" height="300px" />
            )}
            <div className="form-group mt-3">
              <label>Destination</label>
              <input
                defaultValue={isEditing ? event.destination : ""}
                type="text"
                className="form-control col-lg-6"
                onChange={handleInput}
                name="destination"
              />
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <textarea
                defaultValue={isEditing ? event.description : ""}
                type="text"
                className="form-control col-lg-6"
                onChange={handleInput}
                name="description"
              />
            </div>

            <button
              className="btn btn-primary float-right btn-block w-25 mt-3 font-weight-bold"
              onClick={handleCreateOrEdit}
            >
              {isEditing ? "Save" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventAddEdit;
