import axios from "axios";

// Export an object containing methods we'll use for accessing the NYT API

export default {
//   getRandomDog: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
  getArticles: function() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    return axios.get(queryURL);
  }
};