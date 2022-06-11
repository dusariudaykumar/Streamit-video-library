import axios from "axios";

const createNewPlaylistService = (encodedToken, title) => {
  return axios.post(
    "/api/user/playlists",
    { playlist: { title } },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
const deletePlaylistService = (encodedToken, playlistId) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

const addToPlaytlistService = (encodedToken, playlistId, video) => {
  return axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
const removeVideoFromPlaylist = (encodedToken, playlistId, videoId) => {
  return axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
export {
  createNewPlaylistService,
  deletePlaylistService,
  addToPlaytlistService,
  removeVideoFromPlaylist,
};
