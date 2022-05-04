export const filterByCategories = (categoryName, videos) => {
  if (categoryName === "All") {
    return videos;
  } else {
    return videos.filter((video) => video.categoryName === categoryName);
  }
};
