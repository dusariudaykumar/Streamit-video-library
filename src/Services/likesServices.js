import axios from "axios";

const addLikeToVideos = (encodedToken, video) => {
  return axios.post(
    "/api/user/likes",
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

const removeLikeFromVideo = (encodedToken, videoId) => {
  return axios.delete(`/api/user/likes/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
export { addLikeToVideos, removeLikeFromVideo };
