export const videoReducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "INIT_VIDEOS":
      return {
        ...state,
        videos: payload,
      };
  }
};
