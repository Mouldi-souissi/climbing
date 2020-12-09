import React, { useContext } from "react";
import moment from "moment";
import { PostsContext } from "../contexts/PostsContext";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";

function CommentSubCard(props) {
  const { comment, date, user, _id } = props.subComment;
  const { deleteSubCommentByOwner } = useContext(PostsContext);
  const { id } = useParams();

  // checking if user is the owner of the sub comment
  const token = localStorage.getItem("token");
  const actuelUserId = token && jwtDecode(token).id;
  const subCommentOwner = actuelUserId !== user._id ? false : true;

  return (
    <div className="media mt-3">
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
        <div className="mar-btm">
          <a
            href="/"
            className="btn-link text-semibold media-heading box-inline"
          >
            {user && user.name}
          </a>
          <p className="text-muted text-sm">
            {moment(date).startOf("mins").fromNow()}
          </p>
        </div>
        <p>{comment}</p>
        <hr />
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
            <div
              className="dropdown-item btn"
              onClick={() => deleteSubCommentByOwner(id, props.commentId, _id)}
            >
              <i className="fa fa-trash-o mr-2 pb-2" />
              Delete comment
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentSubCard;
