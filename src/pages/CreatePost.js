import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Bonus from "../components/Bonus";
import GlobalContext from "../GlobalContext";
import PostPreview from "./PostPreview";

function CreatePost() {
  const [content, setValue] = useState("");
  let [data, setData] = useState("");
  const { createPost } = useContext(GlobalContext);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div
        className="container card shadow-sm p-4 mb-5"
        style={{ borderRadius: "20px" }}
      >
        <div className="card-body">
          <h2 className="card-title">Create Blog Post</h2>
          <Bonus />
          <div class="form-group mt-5">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              name="title"
              onChange={handleInput}
            />
          </div>
          <div class="form-group mt-3">
            <label>Image Url</label>
            <input
              type="text"
              class="form-control"
              onChange={handleInput}
              name="image"
            />
          </div>
          <div class="form-group mt-3">
            <label>Content</label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setValue}
              name="content"
            />
          </div>
          <button
            className="btn btn-primary float-right btn-block w-25 mt-3"
            onClick={() => createPost((data = { ...data, content }))}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
