export const authReducer = (state, { type, payload }) => {
  console.log(type);
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: payload.encodedToken ? true : false,
        userData: payload.foundUser,
        encodedToken: payload.encodedToken,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isAuth: payload.encodedToken ? true : false,
        userData: payload.createdUser,
        encodedToken: payload.encodedToken,
      };
    default:
      return state;
  }
};
