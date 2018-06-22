import axios from "axios";

const nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const apiKey = "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// const startYear = "&begin_date=" + startYear + "0101";
// const endYear = "&end_date=" + endYear + "0101";

// Export an object containing methods we'll use for accessing the NYT API
export default {
  // Scrape for articles according to search params.
  getArticles: function(search) {
    return axios.get(nytURL + apiKey + "&q=" + search);
  },

  // Save an article to the MongoDB
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },

  // Get all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },

  // Get a specific saved article by its id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },

  // Remove an article by id from the MongoDB
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }

};