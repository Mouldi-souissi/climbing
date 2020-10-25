import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Bonus from "../components/Bonus";
import GlobalContext from "../GlobalContext";

function CreatePost() {
  const [value, setValue] = useState("");
  const { createPost } = useContext(GlobalContext);
  return (
    <div
      className="container card shadom-sm p-4 mb-5"
      style={{ marginTop: "100px", borderRadius: "20px" }}
    >
      <div className="card-body">
        <h2 className="card-title">Create Blog Post</h2>
        <Bonus />
        <div class="form-group mt-5">
          <label>Title</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group mt-3">
          <label>Image Url</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group mt-3">
          <label>Content</label>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
        <button
          className="btn btn-primary float-right btn-block w-25 mt-3"
          onClick={createPost}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
