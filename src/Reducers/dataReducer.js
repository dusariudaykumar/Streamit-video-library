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
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlist: payload,
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: payload,
      };
    case "SET_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((playlist) => {
          return playlist._id === payload._id
            ? { ...playlist, videos: [...payload.videos] }
            : playlist;
        }),
      };
    default:
      return state;
  }
};
