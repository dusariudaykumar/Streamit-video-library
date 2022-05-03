export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case "INIT_VIDEOS":
      return {
        ...state,
        videos: payload,
      };
  }
};
