import React from "react";

function SubCommentCard() {
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
            Bobby Marz
          </a>
          <p className="text-muted text-sm">7 min ago</p>
        </div>
        <p>
          Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat.
        </p>
        <div>
          <div className="btn-group">
            <i className="fa fa-thumbs-up btn mr-1 bg-tranparent btn-primary"></i>
            <i className="fa fa-thumbs-down btn bg-tranparent mr-2 btn-outline-primary"></i>
          </div>
          <a className="btn btn-sm btn-outline-primary" href="/">
            Comment
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default SubCommentCard;
