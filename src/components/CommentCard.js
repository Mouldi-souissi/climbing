import React, { useContext } from "react";
import moment from "moment";
import GlobalContext from "../GlobalContext";
import { useParams } from "react-router-dom";

function CommentCard(props) {
  const { name, comment, date, _id } = props.comment;
  const { deleteCommentByOwner } = useContext(GlobalContext);
  const { id } = useParams();
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

              <a className="btn btn-sm btn-outline-primary" href="/">
                Comment
              </a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
