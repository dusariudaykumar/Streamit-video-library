import { VideoCard } from "../../components";
import { useAuth, useVideo, useData } from "../../Contexts";
import { addVideoToWatchLater } from "../../Services";
import "./HomePage.css";
const HomePage = () => {
  const {
    videoState: { videos },
  } = useVideo();
  const {
    authState: { encodedToken },
  } = useAuth();
  const { dataDispatch } = useData();

  const addVideoToWatchLaterHandler = async (video) => {
    try {
      const {
        data: { watchlater },
      } = await addVideoToWatchLater(encodedToken, video);
      dataDispatch({ type: "ADD_TO_WATCH_LATER", payload: watchlater });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="home-page-wrapper">
      <div className="videos-wrapper flex">
        {videos.map((video) => {
          return (
            <VideoCard
              key={video._id}
              video={video}
              addVideoToWatchLaterHandler={() =>
                addVideoToWatchLaterHandler(video)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export { HomePage };
