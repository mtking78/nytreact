import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { Input, SearchBtn, ClearBtn } from "../components/Form";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Articles extends Component {
  state = {
    articles: [],
    search: "",
    error: ""
  };

  componentDidMount() {
    // When the component mounts, load all the saved articles.
    // this.loadSavedArticles();
  }

  // When the component mounts, get a list of recent articles.
//   loadArticles = () => {
//     API.getArticles()
//       .then(res => this.setState({ articles: res.data }))
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ articles: res.data, error: "" });
        console.log(res.data);
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
    <div>
      <Container fluid>
        <Jumbotron>
          <h1><strong>
          <i className="fa fa-newspaper-o"></i> New York Times Search
          </strong></h1>
        </Jumbotron>
        {/* Row for Searching NYT */}
        <Row>
          <Col size="md-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong>
                  <i className="fa  fa-list-alt"></i> Search Parameters
                </strong></h3>
              </div>
              <div className="panel-body">
                <SearchForm
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Retrieved Articles */}
        <Row>
          <Col size="md-12">
            {/* This panel will initially be made up of a panel and wells for each of the articles retrieved */}
            <div className="panel panel-primary">
              {/* Panel Heading for the retrieved articles box */}
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>Top Articles</strong>
                </h3>
              </div>
              {/* This main panel will hold each of the resulting articles */}
              <div className="panel-body" id="well-section-scraped">
                {/* **** scraped articles **** */}
                <SearchResults articles={this.state.articles} />
                
                {/* <div>
                  {props.articles.map(article => (
                    <article className="well" key={article._id}>
                      <h3 className="articleHeadline">
                        {article.headline}
                      </h3>
                      <h5>
                        {article.byline}
                      </h5>
                      <h5>
                        {article.pub_date}
                      </h5>
                      <a href={article.web_url} target="_blank">
                      </a>
                    </article>
                  ))}
                </div> */}

              </div>
            </div>
          </Col>
        </Row>

        {/* Saved Articles */}
        <Row>
          <Col size="md-12">
            {/* This panel will initially be made up of a panel and wells for each of the articles saved */}
            <div className="panel panel-primary">
              {/* Panel Heading for the retrieved articles box */}
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>Saved Articles</strong>
                </h3>
              </div>
              {/* This main panel will hold each of the resulting articles */}
              <div className="panel-body" id="well-section-saved">
                {/* **** saved articles **** */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default Articles;