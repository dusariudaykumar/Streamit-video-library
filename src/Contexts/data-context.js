import { createContext, useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../custom-hooks/useToast";
import { dataReducer } from "../Reducers";
import { addVideoToWatchLater, removeVideoFromWatchLater } from "../Services";
import { useAuth } from "./auth-context";
const initialState = {
  likes: [],
  watchlater: [],
  playlist: [],
  history: [],
  hideMenu: false,
};
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const {
    authState: { encodedToken },
  } = useAuth();
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  const addVideoToWatchLaterHandler = async (video) => {
    try {
      const {
        data: { watchlater },
      } = await addVideoToWatchLater(encodedToken, video);
      dataDispatch({ type: "ADD_TO_WATCH_LATER", payload: watchlater });
      showToast("Added to Watchlater", "success");
    } catch (error) {
      if (error.request.status === 500) {
        navigate("/login");
      }
      console.log(error.message);
    }
  };

  // remove from watch later

  const removeVideoFromWatchLaterHandler = async (videoId) => {
    try {
      const {
        data: { watchlater },
      } = await removeVideoFromWatchLater(encodedToken, videoId);
      dataDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: watchlater });
      showToast("Removed from Watchlater", "success");
    } catch (error) {
      if (error.request.status === 500) {
        navigate("/login");
      }
      console.log(error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        removeVideoFromWatchLaterHandler,
        addVideoToWatchLaterHandler,
      }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
