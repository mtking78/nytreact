import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  // <div>
  //   {props.articles.map(article => (
  //     <article className="well" key={article._id}>
  //       <h3 className="articleHeadline">
  //         {article.headline}
  //       </h3>
  //       <h5>
  //         {article.byline}
  //       </h5>
  //       <h5>
  //         {article.pub_date}
  //       </h5>
  //       <a href={article.web_url} target="_blank">
  //       </a>
  //     </article>
  //   ))}
  // </div>
  <ul className="list-group search-results">
    {props.articles.map(article => (
      <li key={article} className="list-group-item">
        <h3 className="articleHeadline">
          {article}
        </h3>
      </li>
    ))}
  </ul>
);

export default SearchResults;
