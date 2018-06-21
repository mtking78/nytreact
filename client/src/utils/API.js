import axios from "axios";

const nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const apiKey = "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Export an object containing methods we'll use for accessing the NYT API
export default {
  getArticles: function(search) {
    return axios.get(nytURL + apiKey + "&q=" + search);
  }
};