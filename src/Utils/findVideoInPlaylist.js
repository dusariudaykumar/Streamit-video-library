export const findVideoInPlaylist = (videoId, playlist) => {
  return playlist.find((video) => video._id === videoId);
};
