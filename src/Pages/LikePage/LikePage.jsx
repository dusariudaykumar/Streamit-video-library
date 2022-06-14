import { VerticalVideoCard } from "../../components";
import { useAuth, useData } from "../../Contexts";
import { removeLikeFromVideo } from "../../Services";
import "./LikePage.css";

const LikePage = () => {
  const {
    dataState: { likes },
    dataDispatch,
  } = useData();

  const {
    authState: { encodedToken },
  } = useAuth();

  const count = likes.length;
  const removeLikeHandler = async (videoId) => {
    try {
      const {
        data: { likes },
      } = await removeLikeFromVideo(encodedToken, videoId);
      dataDispatch({ type: "REMOVE_LIKE", payload: likes });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="pages-wrapper">
      <h3>
        Liked Videos
        {count !== 0 && (
          <span>{count > 1 ? `${count} videos` : `${count} video`}</span>
        )}
      </h3>
      <hr />
      {count === 0 ? (
        <div className="empty-placeholder-container">
          <h5>No liked videos</h5>
        </div>
      ) : (
        <div className="likes-video-wrapper">
          {likes.map((video, index) => {
            return (
              <VerticalVideoCard
                key={video._id}
                count={index + 1}
                video={video}
                removeLikeHandler={() => removeLikeHandler(video._id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export { LikePage };
