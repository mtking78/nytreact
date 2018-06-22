import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import { ScrapeList, ScrapeListItem } from "../components/ScrapeList";
import DeleteBtn from "../components/DeleteBtn";

class Articles extends Component {
  state = {
    articles: [],
    search: "",
    error: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  // When the component mounts, get a list of saved articles.
  loadArticles = () => {
    API.getSavedArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

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
        this.setState({ articles: res.data.response.docs, error: "" });
        console.log(res.data.response.docs);
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleArticleSave = event => {
    event.preventDefault();
    API.saveArticle({
      article: this.state.article
    })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
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

                {!this.state.articles.length ? (
                  <h1 className="text-center">
                    No Articles to Display
                  </h1>
                ) : (
                  <ScrapeList>
                    {this.state.articles.map(article => {
                      return (
                        <ScrapeListItem
                          key={article._id}
                          headline={article.headline}
                          byline={article.byline || ""}
                          web_url={article.web_url || ""}
                          pub_date={article.pub_date || ""}
                          onClick={this.handleArticleSave}
                        >
                          {/* <DeleteBtn onClick={() =>
                            this.deleteArticle(article._id)
                          } /> */}
                        </ScrapeListItem>
                      );
                    })}
                  </ScrapeList>
                )}

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