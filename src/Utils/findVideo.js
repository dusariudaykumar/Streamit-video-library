export const findVideo = (videoId, videos) => {
  return videos.find((video) => video._id === videoId);
};
