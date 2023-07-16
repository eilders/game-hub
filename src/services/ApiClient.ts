import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "48b8b263f22f4449a797a1fe9f3b4583",
  },
});
