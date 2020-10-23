import React from "react";

function Bonus() {
  return (
    <div className="container-fluid bonus" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-1 panels panel1" />
        <div className="col-1 panels panel2" />
        <div className="col-1 panels panel3" />
        <div className="col-1 panels panel4" />
        <div className="col-1 panels panel5" />
        <h5
          style={{
            position: "absolute",
            zIndex: "3",
            letterSpacing: "7px",
            top: "3px",
            left: "5px",
            color: "white",
          }}
        >
          Climbing
        </h5>
      </div>
    </div>
  );
}

export default Bonus;
