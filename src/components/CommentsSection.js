import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../contexts/PostsContext";
import CommentCard from "./CommentCard";
import moment from "moment";

function CommentsSection({ post, isOwner }) {
  const [comment, setComment] = useState("");
  const { addComment } = useContext(PostsContext);
  const { id } = useParams();
  const handleEnter = (e) => {
    if (e.charCode === 13) {
      const copy = comment;
      addComment(id, { comment: copy });
      setComment("");
    }
  };
  return (
    <div className="container-fluid mt-5">
      <h4 className="mb-5 text-center">Comments</h4>
      <div className="row">
        <div className="col-md-12">
          <div
            className="comment-form card shadow-sm p-4 mb-3"
            style={{ borderRadius: "20px" }}
          >
            <div className="panel-body">
              <input
                className="form-control mt-3"
                rows="2"
                placeholder="What are you thinking?"
                onChange={(e) => setComment(e.target.value)}
                onKeyPress={handleEnter}
                value={comment}
              ></input>
              <div className="mt-3">
                <button
                  className="btn btn-sm btn-primary pull-right"
                  type="submit"
                  onClick={() => addComment(id, { comment })}
                >
                  <i className="fa fa-pencil fa-fw"></i> Share
                </button>
                {/* <i
                  className="btn btn-trans btn-icon fa fa-video-camera add-tooltip"
                  href="/"
                ></i>
                <i
                  className="btn btn-trans btn-icon fa fa-camera add-tooltip"
                  href="/"
                ></i>
                <i
                  className="btn btn-trans btn-icon fa fa-file add-tooltip"
                  href="/"
                ></i> */}
              </div>
            </div>
          </div>

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
