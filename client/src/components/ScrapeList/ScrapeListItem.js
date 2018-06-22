import React from "react";
import "./ScrapeList.css";

export const ScrapeListItem = props => (

      <article className="well" {... props._id}>
        <h3 className="articleHeadline">
          {props.headline.main}
        </h3>
        <h5>
          {props.byline.original}
        </h5>
        <h5>
          {props.pub_date}
        </h5>
        <button className="btn btn-default">
          <a href={props.web_url} target="_blank">
            Open
          </a>
        </button>
        <button className="btn btn-danger" key={props._id}>
          Save
        </button>
      </article>

);
