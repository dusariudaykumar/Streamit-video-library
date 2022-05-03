import { createContext, useReducer, useContext, useEffect } from "react";
import { videoReducer } from "../Reducers";
import { getVideosService } from "../Services";

const initialState = {
  videos: [],
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
        console.log(videos);
        videoDispatch({ type: "INIT_VIDEOS", payload: videos });
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
