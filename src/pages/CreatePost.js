import React, { useContext, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useHistory, useParams } from "react-router-dom";
import Bonus from "../components/Bonus";
import InputTag from "../components/InputTag";
import { PostsContext } from "../contexts/PostsContext";
// import PostPreview from "./PostPreview";
var _ = require("lodash");

function CreatePost() {
  // state
  // const [content, setValue] = useState("");
  let [data, setData] = useState("");
  const { id } = useParams();

  // context
  const { createPost, editPost } = useContext(PostsContext);

  // checking if editing post
  const { isEditing, post } = useHistory().location.state;

  // handling form
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // handle create or edit post
  const handleCreateOrEdit = () => {
    if (isEditing) {
      // clean object from unmodified fields
      const modified = _.omit(data, _.isUndefined);
      editPost(id, modified);
      setData("");
    } else {
      const copy = data;
      createPost(copy);
      setData("");
    }
  };

  // grab tags from inputTags
  const grabTags = (tags) => {
    setData({ ...data, tags });
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
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
            <div className="form-group mt-3">
              <label>Tags</label>
              <InputTag
                grabTags={grabTags}
                postTags={isEditing ? post.tags : []}
              />
            </div>
            {data.image && (
              <img src={data.image} alt="img preview" height="300px" />
            )}
            <div className="form-group mt-3">
              <label>Content</label>
              <ReactQuill
                theme="snow"
                defaultValue={isEditing ? post.content : ""}
                onChange={(value) => setData({ ...data, content: value })}
                name="content"
              />
            </div>
            <button
              className="btn btn-primary float-right btn-block w-25 mt-3 font-weight-bold"
              onClick={handleCreateOrEdit}
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
