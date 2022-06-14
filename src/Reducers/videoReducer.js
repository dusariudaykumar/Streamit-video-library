export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case "INIT_VIDEOS":
      return {
        ...state,
        videos: payload,
      };
    case "CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    case "CATEGORY_TYPE":
      return {
        ...state,
        categoryName: payload,
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        searchQuerytext: payload,
      };
    default:
      return state;
  }
};
