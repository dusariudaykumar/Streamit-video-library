import { useLocation } from "react-router-dom";
import { VerticalVideoCard } from "../../components";
import { useData } from "../../Contexts";

const WatchLaterPage = () => {
  const location = useLocation();

  const {
    dataState: { watchlater },
    removeVideoFromWatchLaterHandler,
  } = useData();
  const count = watchlater.length;

  return (
    <div className="pages-wrapper">
      <h3>
        Watch later
        {count !== 0 && (
          <span>{count > 1 ? `${count} videos` : `${count} video`}</span>
        )}
      </h3>
      <hr />
      <div className="likes-video-wrapper">
        {watchlater.map((video, index) => {
          return (
            <VerticalVideoCard
              key={video._id}
              count={index + 1}
              video={video}
              pathname={location.pathname}
              removeVideoFromWatchLaterHandler={() =>
                removeVideoFromWatchLaterHandler(video._id)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export { WatchLaterPage };
