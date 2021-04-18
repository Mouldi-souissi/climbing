import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../contexts/PostsContext";
import CommentCard from "./CommentCard";
import moment from "moment";

function CommentsSection({ post, isOwner }) {
  const [comment, setComment] = useState("");
  const { addComment } = useContext(PostsContext);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const copy = comment;
    addComment(id, { comment: copy });
    setComment("");
  };
  return (
    <div className="container-fluid mt-5">
      <h4 className="mb-5 text-center">Comments</h4>
      <div className="row">
        <div className="col-md-12">
          <form
            className="comment-form card shadow-sm p-4 mb-3"
            style={{ borderRadius: "20px" }}
            onSubmit={handleSubmit}
          >
            <div className="panel-body">
              <input
                className="form-control mt-3"
                rows="2"
                placeholder="What are you thinking?"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              ></input>
              <div className="mt-3">
                <button
                  className="btn btn-sm btn-primary pull-right"
                  type="submit"
                >
                  Share
                </button>
              </div>
            </div>
          </form>

          {post &&
            post.comments
              .sort((a, b) => new moment(b.date) - new moment(a.date))
              .map((comment) => (
                <CommentCard
                  key={comment._id}
                  comment={comment}
                  isOwner={isOwner}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default CommentsSection;
