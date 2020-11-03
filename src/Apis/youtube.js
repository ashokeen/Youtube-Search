import axios from "axios";
const KEY = "AIzaSyCyNa9eGBO40JfCl-SxpCcUO4viyCEcYrw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
