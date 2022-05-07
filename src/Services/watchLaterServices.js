import axios from "axios";

const addVideoToWatchLater = (encodedToken, video) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

const removeVideoFromWatchLater = (encodedToken, videoId) => {
  return axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
export { addVideoToWatchLater, removeVideoFromWatchLater };
