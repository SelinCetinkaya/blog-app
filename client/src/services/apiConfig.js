import axios from "axios";

let apiUrl;

const apiUrls = {
<<<<<<< HEAD
    production: 'https://blog-app-jjsm.herokuapp.com/api/posts',
    development: 'http://localhost:3000/api'
}
=======
  production: "https://blog-app-jjsm.herokuapp.com/api",
  development: "http://localhost:3000/api",
};
>>>>>>> 098a08e03c1abd7f9e7666038af4d210dfe9a265

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
