import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useHistory } from "react-router-dom";
import Bonus from "../components/Bonus";
import GlobalContext from "../GlobalContext";
// import PostPreview from "./PostPreview";

function CreatePost() {
  const [content, setValue] = useState("");
  let [data, setData] = useState("");
  const { createPost, post } = useContext(GlobalContext);
  let isEditing = useHistory().location.state;

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container " style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-lg-12  mb-5" style={{ borderRadius: "20px" }}>
          <div className="card-body">
            <h2 className="card-title">
              {isEditing ? "Edit" : "Create"} Blog Post
            </h2>
            <Bonus />
            <div className="form-group mt-5">
              <label>Title</label>
              <input
                defaultValue={isEditing ? post.title : ""}
                type="text"
                className="form-control col-lg-6"
                name="title"
                onChange={handleInput}
              />
            </div>
            <div className="form-group mt-3">
              <label>Image Url</label>
              <input
                defaultValue={isEditing ? post.image : ""}
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
              <label>Content</label>
              <ReactQuill
                theme="snow"
                defaultValue={isEditing ? post.content : content}
                onChange={setValue}
                name="content"
              />
            </div>
            <button
              className="btn btn-primary float-right btn-block w-25 mt-3 font-weight-bold"
              onClick={() => createPost((data = { ...data, content }))}
            >
              {isEditing ? "Save" : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
