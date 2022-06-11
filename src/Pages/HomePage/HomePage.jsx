import { VideoCard } from "../../components";
import { useVideo } from "../../Contexts";

import "./HomePage.css";
const HomePage = () => {
  const {
    videoState: { videos },
  } = useVideo();
  return (
    <div className="home-page-wrapper">
      <div className="videos-wrapper flex">
        {videos.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </div>
  );
};

export { HomePage };
