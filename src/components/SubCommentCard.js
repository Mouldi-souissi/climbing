import React from "react";
import moment from "moment";

function SubCommentCard(props) {
  const { comment, date, user } = props.subComment;
  return (
    <div className="media mt-3">
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
            href="/"
            className="btn-link text-semibold media-heading box-inline"
          >
            {user.name}
          </a>
          <p className="text-muted text-sm">
            {" "}
            {moment(date).startOf("mins").fromNow()}
          </p>
        </div>
        <p>{comment}</p>
        <hr />
      </div>
    </div>
  );
}

export default SubCommentCard;
