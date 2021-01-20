import React from "react";

const Message = ({ message }) => {
  return (
    <div style={{ marginTop: "80px" }}>
      <div class="alert alert-danger" role="alert">
        {message}
      </div>
    </div>
  );
};

export default Message;
