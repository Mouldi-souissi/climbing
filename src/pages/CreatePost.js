import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Bonus from "../components/Bonus";
import GlobalContext from "../GlobalContext";
import PostPreview from "./PostPreview";

function CreatePost() {
  const [value, setValue] = useState("");
  const { createPost } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setimage] = useState("");
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class="form-group mt-3">
            <label>Image Url</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setimage(e.target.value)}
            />
          </div>
          <div class="form-group mt-3">
            <label>Content</label>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
          <button
            className="btn btn-primary float-right btn-block w-25 mt-3"
            onClick={() => setShow(true)}
          >
            Post
          </button>
        </div>
      </div>
      {show && <PostPreview image={image} title={title} content={value} />}
    </div>
  );
}

export default CreatePost;
