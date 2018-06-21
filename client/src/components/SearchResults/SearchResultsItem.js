import React from "react";
import "./SearchResults.css";

export const SearchResultsItem = props => (

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
        <a href={props.web_url} target="_blank">
          Link
        </a>
      </article>

);
