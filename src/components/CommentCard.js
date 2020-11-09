import React, { useContext, useState } from "react";
import moment from "moment";
import { PostsContext } from "../contexts/PostsContext";
import { useParams } from "react-router-dom";
import SubCommentCard from "./SubCommentCard";

function CommentCard(props) {
  const { name, comment, date, _id, subComments } = props.comment;
  const { deleteCommentByOwner, addSubComment } = useContext(PostsContext);
  const [showCommentbar, setCommentbar] = useState(false);
  const [subComment, setSubComment] = useState("");
  const { id } = useParams();

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      const copy = subComment;
      addSubComment(id, _id, { comment: copy });
      setSubComment("");
    }
  };

  return (
    <div className="comments mt-5 animate__animated animate__fadeInDown">
      <div className="media">
        <a className="" href="/">
          <img
            className="rounded-circle img-sm mr-3 align-self-start"
            alt="avatar"
            src="https://www.gravatar.com/avatar/1234566?size=200&d=mm"
          />
        </a>
        <div className="media-body">
          <div className="mar-btm">
            <a
              href="/user"
              className="btn-link text-semibold media-heading box-inline"
            >
              {name}
            </a>
            <p className="text-muted text-sm">
              {moment(date).startOf("mins").fromNow()}
            </p>
          </div>
          <p>{comment}</p>
          <div>
            <div className="btn-group">
              <i className="fa fa-thumbs-up btn mr-1 bg-tranparent btn-primary"></i>
              <i className="fa fa-thumbs-down btn bg-tranparent mr-1 btn-outline-primary"></i>
              {props.isOwner && (
                <i
                  className="fa fa-trash-o mr-2 btn btn-outline-danger"
                  onClick={() => deleteCommentByOwner(id, _id)}
                />
              )}

              <div
                className="btn btn-sm btn-outline-primary"
                onClick={() => setCommentbar(!showCommentbar)}
              >
                Comment
              </div>
            </div>
            {showCommentbar && (
              <div className="mt-3 d-flex align-items-center">
                <input
                  className="form-control mr-3"
                  onChange={(e) => setSubComment(e.target.value)}
                  onKeyPress={handleEnter}
                  value={subComment}
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    addSubComment(id, _id, { comment: subComment })
                  }
                >
                  <i className="fa fa-pencil d-inline mr-1"></i>
                  Share
                </button>
              </div>
            )}
          </div>
          <hr />
          {subComments
            .sort((a, b) => new moment(b.date) - new moment(a.date))
            .map((subComment) => (
              <SubCommentCard subComment={subComment} key={subComment._id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
