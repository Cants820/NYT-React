// import axios from "axios";

// export default {

//   search:(topic, startYear, endYear) => {
//     const APIkey = 'dd5006dd525842fd8a6eb8360611378a'
//     const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIkey + '&q="' + topic + '"&begin_date=' + startYear + '0101&end_date=' + endYear + '0101';
//     console.log(queryURL);
//     return axios.get(queryURL);
//   },

<<<<<<< HEAD
//   saveArticle: articleObj => {
//     return axios.post("/api/article", articleObj);
//   },
=======
  saveArticle: articleObj => {
    return axios.post("/api/article/save", articleObj);
  },
>>>>>>> d3f7ea19838346839831f05df55d73bcd082fbc5

//   getSavedArticles: () => {
//     return axios.get("/api/article");
//   },

//   removeArticle: id =>{
//     return axios.delete('/api/article/' + id)
//   }
// };

