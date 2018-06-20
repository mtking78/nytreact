import React from "react";

export const SearchBtn = props => (
  <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-default" id="run-search">
    {props.children}
  </button>
);
