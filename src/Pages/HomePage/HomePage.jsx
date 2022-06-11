import { useNavigate } from "react-router-dom";
import { VideoCard } from "../../components";
import { useAuth, useVideo, useData } from "../../Contexts";
import { useToast } from "../../custom-hooks/useToast";
import { addVideoToWatchLater } from "../../Services";
import "./HomePage.css";
const HomePage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
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
      showToast("Added to Watchlater", "success");
    } catch (error) {
      if (error.request.status === 500) {
        navigate("/login");
      }
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
