import React, { useContext, useState } from "react";
import moment from "moment";
import { PostsContext } from "../contexts/PostsContext";
import { useParams } from "react-router-dom";
import SubCommentCard from "./SubCommentCard";

function CommentCard(props) {
  const { user, comment, date, _id, subComments } = props.comment;
  const { deleteCommentByOwner, addSubComment } = useContext(PostsContext);
  const [showCommentbar, setCommentbar] = useState(false);
  const [subComment, setSubComment] = useState("");
  const { id } = useParams();

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      const copy = subComment;
      addSubComment(id, _id, { comment: copy });
      setSubComment("");
      setCommentbar(false);
    }
  };

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
            <div className="mt-2 d-flex align-items-center">
              <input
                className="form-control mr-3"
                onChange={(e) => setSubComment(e.target.value)}
                onKeyPress={handleEnter}
                value={subComment}
              />
              <button
                className="btn btn-primary btn-sm"
                onClick={() => addSubComment(id, _id, { comment: subComment })}
              >
                <i className="fa fa-pencil d-inline mr-1"></i>
                Share
              </button>
            </div>
          )}

          <hr />
          {subComments
            .sort((a, b) => new moment(b.date) - new moment(a.date))
            .map((subComment) => (
              <SubCommentCard subComment={subComment} key={subComment._id} />
            ))}
        </div>
        {props.isOwner && (
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
                <i className="fa fa-trash-o mr-2 pb-2" />
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
