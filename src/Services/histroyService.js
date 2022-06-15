import axios from "axios";
const addVideoToHistoryService = (encodedToken, video) => {
  return axios.post(
    "/api/user/history",
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

const removeVideoFromHistoryService = (encodedToken, videoId) => {
  return axios.delete(`/api/user/history/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

const clearAllHistoryService = (encodedToken) => {
  return axios.delete("/api/user/history/all", {
    headers: {
      authorization: encodedToken,
    },
  });
};
export {
  addVideoToHistoryService,
  removeVideoFromHistoryService,
  clearAllHistoryService,
};
