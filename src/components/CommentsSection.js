import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../GlobalContext";

function CommentsSection() {
  const [comment, setComment] = useState("");
  const { addComment } = useContext(GlobalContext);
  const { id } = useParams();
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-12">
          <div
            className="comment-form card shadow-sm p-4"
            style={{ borderRadius: "20px" }}
          >
            <div className="panel-body">
              <textarea
                className="form-control"
                rows="2"
                placeholder="What are you thinking?"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <div className="mar-top clearfix">
                <button
                  className="btn btn-sm btn-primary pull-right"
                  type="submit"
                  onClick={() => addComment(id, { comment })}
                >
                  <i className="fa fa-pencil fa-fw"></i> Share
                </button>
                <i
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
                ></i>
              </div>
            </div>
          </div>

          <div className="comments mt-5">
            <div className="media">
              <a className="" href="/">
                <img
                  className="rounded-circle img-sm mr-3 align-self-start"
                  alt="avatar"
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                />
              </a>
              <div className="media-body">
                <div className="mar-btm">
                  <a
                    href="/user"
                    className="btn-link text-semibold media-heading box-inline"
                  >
                    Lisa D.
                  </a>
                  <p className="text-muted text-sm">11 min ago</p>
                </div>
                <p>
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat.
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
                      Sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsSection;
