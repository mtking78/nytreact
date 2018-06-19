import React from "react";

export const ClearBtn = props => (
  <button {...props} style={{ float: "left", marginBottom: 10, marginLeft: 20 }} className="btn btn-danger" id="clear-all">
    {props.children}
  </button>
);
