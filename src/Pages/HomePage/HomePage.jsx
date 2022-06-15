import { VideoCard } from "../../components";
import { useVideo } from "../../Contexts";
import { searchVideos } from "../../Utils/searchVideo";

import "./HomePage.css";
const HomePage = () => {
  const {
    videoState: { videos, searchQuerytext },
  } = useVideo();
  const searchedVideos = searchVideos(searchQuerytext, videos);

  return (
    <div className="home-page-wrapper">
      <div className="videos-wrapper flex">
        {searchedVideos.length === 0 ? (
          <p className="p-lg not-found-msg"> No videos found!</p>
        ) : (
          searchedVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })
        )}
      </div>
    </div>
  );
};

export { HomePage };
