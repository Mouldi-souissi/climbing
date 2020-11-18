import React from "react";
import { Link } from "react-router-dom";

const BlogShowLikers = ({ likes }) => {
  // sumilate exit click
  let buttonRef = "";
  const simulateClick = () => {
    console.log("hello there");
    buttonRef.click();
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              List of likes
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              ref={(ref) => (buttonRef = ref)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {likes.map((like) => (
              <Link to={`/profile${like._id}`} onClick={simulateClick}>
                <div className="media mb-3 d-flex align-items-center">
                  <img
                    className="rounded-circle img-sm mr-3 align-self-start"
                    alt="avatar"
                    src={
                      like.avatar
                        ? like.avatar
                        : "https://www.gravatar.com/avatar/1234566?size=200&d=mm"
                    }
                  />
                  <div className="media-body">
                    <h5 className="">{like.name}</h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogShowLikers;
