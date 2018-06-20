import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form className="search">
    {/* Search Term */}
    <div className="form-group">
      <label htmlFor="search">Search Term:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="search-term"
        type="text"
        className="form-control"
        id="search-term"
      />
    </div>
    {/* Number of Articles */}
    <div className="form group">
      <label htmlFor="pwd">Number of Records to Retrieve:</label>
      <select className="form-control" id="article-count">
        <option value="1">1</option>
        <option value="5" defaultValue>5</option>
        <option value="10">10</option>
      </select>
    </div>
    {/* Start Year */}
    <div className="form-group">
      <label htmlFor="start-year">Start Year (optional):</label>
      <input
        // value={props.search}
        // onChange={props.handleInputChange}
        name="start-year"
        type="number"
        className="form-control"
        id="start-year"
      />
    </div>
    {/* End Year */}
    <div className="form-group">
      <label htmlFor="end-year">End Year (optional):</label>
      <input
        // value={props.search}
        // onChange={props.handleInputChange}
        name="end-year"
        type="number"
        className="form-control"
        id="end-year"
      />
    </div>
    <br />
    {/* Search Button */}
    <button
      type="submit"
      onClick={props.handleFormSubmit}
      name="run-search"
      className="btn btn-default"
      id="run-search"
    >
      <i className="fa fa-search"></i> Search
    </button>
    {/* Clear Button */}
    <button
      // type="submit"
      // onClick={props.handleFormSubmit}
      name="clear-all"
      className="btn btn-danger"
      id="clear-all"
    >
      <i className="fa fa-trash"></i> Clear
    </button>
  </form>
);

export default SearchForm;
