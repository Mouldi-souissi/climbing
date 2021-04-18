import React, { useContext, useState } from "react";
import moment from "moment";
import { PostsContext } from "../contexts/PostsContext";
import { useParams } from "react-router-dom";
import CommentSubCard from "./CommentSubCard";
import jwtDecode from "jwt-decode";

function CommentCard(props) {
  const { user, comment, date, _id, subComments } = props.comment;
  const { deleteCommentByOwner, addSubComment } = useContext(PostsContext);
  const [showCommentbar, setCommentbar] = useState(false);
  const [subComment, setSubComment] = useState("");
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const copy = subComment;
    addSubComment(id, _id, { comment: copy });
    setSubComment("");
    setCommentbar(false);
  };

  // checking if user is the owner of the comment
  const token = localStorage.getItem("token");
  const actuelUserId = token && jwtDecode(token).id;
  const subCommentOwner = actuelUserId !== user._id ? false : true;

  return (
    <div className="comments mt-5 animate__animated animate__fadeInDown">
      <div className="media">
        <a className="" href="/">
          <img
            className="rounded-circle img-sm mr-3 align-self-start"
            alt="avatar"
            src={
              user.avatar
                ? user.avatar
                : "https://www.gravatar.com/avatar/1234566?size=200&d=mm"
            }
          />
        </a>
        <div className="media-body">
          <a
            href="/user"
            className="btn-link text-semibold media-heading box-inline"
          >
            {user.name}
          </a>
          <p className="text-muted text-sm">
            {moment(date).startOf("mins").fromNow()}
          </p>

          <p>{comment}</p>

          <div
            className="btn btn-sm text-primary"
            onClick={() => setCommentbar(!showCommentbar)}
          >
            {showCommentbar ? "Cancel" : "Reply"}
          </div>

          {showCommentbar && (
            <form
              className="mt-2 d-flex align-items-center"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control mr-3"
                onChange={(e) => setSubComment(e.target.value)}
                value={subComment}
              />
              <button className="btn btn-primary btn-sm" type="submit">
                Share
              </button>
            </form>
          )}

          <hr />
          {subComments
            .sort((a, b) => new moment(b.date) - new moment(a.date))
            .map((subComment) => (
              <CommentSubCard
                subComment={subComment}
                key={subComment._id}
                commentId={_id}
                isOwner={props.isOwner}
              />
            ))}
        </div>
        {(props.isOwner || subCommentOwner) && (
          <div className="btn-group dropleft float-right">
            <button
              type="button"
              className="btn btn-transparent"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-cog" aria-hidden="true" />
            </button>
            <div className="dropdown-menu p-0 shadow-sm">
              <div className="dropdown-item btn">
                <i className="fa fa-pencil-square-o mr-2 pb-2" />
                Edit comment
              </div>
              <hr className="my-1 py-0" />
              <div
                className="dropdown-item btn"
                onClick={() => deleteCommentByOwner(id, _id)}
              >
                Delete comment
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentCard;
