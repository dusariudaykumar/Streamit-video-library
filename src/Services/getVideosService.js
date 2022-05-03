import axios from "axios";

export const getVideosService = () => {
  const response = axios.get("/api/videos");
  return response;
};
