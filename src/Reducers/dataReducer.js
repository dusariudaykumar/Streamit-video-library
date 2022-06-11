export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "LIKE_VIDEO":
      return {
        ...state,
        likes: payload,
      };
    case "REMOVE_LIKE":
      return {
        ...state,
        likes: payload,
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchlater: payload,
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchlater: payload,
      };
    default:
      return state;
  }
};
