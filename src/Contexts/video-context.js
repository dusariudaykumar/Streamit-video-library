import { createContext, useReducer, useContext, useEffect } from "react";
import { videoReducer } from "../Reducers";
import { getCategories, getVideosService } from "../Services";

const initialState = {
  videos: [],
  categories: [],
  categoryName: "All",
  searchQuerytext: "",
};
const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await getVideosService();

        videoDispatch({ type: "INIT_VIDEOS", payload: videos });
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await getCategories();
        videoDispatch({ type: "CATEGORIES", payload: categories });
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
