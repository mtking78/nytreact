import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{
      clear: "both",
      textAlign: "center",
      backgroundColor: "#20315A",
      color: "white"
    }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
