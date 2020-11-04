import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";

function BlogDelete({ id, x }) {
  const { deletePost } = useContext(GlobalContext);

  // sumilate exit click
  let buttonRef = "";
  const simulateClick = () => {
    buttonRef.click();
  };

  // delete post
  const handleDelete = () => {
    deletePost(id);
    simulateClick();
  };

  return (
    <div
      className="modal fade"
      id={x}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ borderRadius: "20px" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Post
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
            Are you sure you want to delete this post ?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDelete;
