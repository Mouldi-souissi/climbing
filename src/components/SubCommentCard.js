import React from "react";
import moment from "moment";

function SubCommentCard(props) {
  const { comment, date, name } = props.subComment;
  return (
    <div className="media mt-3">
      <a className="" href="/">
        <img
          className="rounded-circle mr-3 img-sm"
          alt="avatar"
          src="https://bootdey.com/img/Content/avatar/avatar2.png"
        />
      </a>
      <div className="media-body">
        <div className="mar-btm">
          <a
            href="/"
            className="btn-link text-semibold media-heading box-inline"
          >
            {name}
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
