import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bb5cfc821e0848ef8ef77c315e688b34",
  },
});
