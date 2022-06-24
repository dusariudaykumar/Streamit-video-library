export const searchVideos = (searchText, videos) => {
  if (searchText) {
    return videos.filter(
      (video) =>
        video.creator.toLowerCase().includes(searchText.toLowerCase()) ||
        video.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  return videos;
};
