import { createContext, useReducer, useContext } from "react";
import { dataReducer } from "../Reducers";
import { removeVideoFromWatchLater } from "../Services";
import { useAuth } from "./auth-context";
const initialState = {
  likes: [],
  watchlater: [],
};
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const {
    authState: { encodedToken },
  } = useAuth();
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  // remove from watch later

  const removeVideoFromWatchLaterHandler = async (videoId) => {
    try {
      const {
        data: { watchlater },
      } = await removeVideoFromWatchLater(encodedToken, videoId);
      dataDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: watchlater });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{ dataState, dataDispatch, removeVideoFromWatchLaterHandler }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
