import { createContext, useReducer, useContext } from "react";

import { authReducer } from "../Reducers";

const initialSate = {
  isAuth: localStorage.getItem("token") ? true : false,
  encodedToken: localStorage.getItem("token") || "",
  userData: JSON.parse(localStorage.getItem("userData")) || "",
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialSate);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
