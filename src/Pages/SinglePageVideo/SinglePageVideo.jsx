import { useNavigate, useParams } from "react-router-dom";
import { HiThumbUp, HiOutlineThumbUp } from "react-icons/hi";
import { useVideo } from "../../Contexts/video-context";
import "./SinglePageVideo.css";
import { useAuth, useData } from "../../Contexts";
import { addLikeToVideos, removeLikeFromVideo } from "../../Services";
import { findVideo } from "../../Utils/findVideo";
const SinglePageVideo = () => {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const {
    videoState: { videos },
  } = useVideo();
  const {
    authState: { encodedToken },
  } = useAuth();
  const {
    dataState: { likes },
  } = useData();
  const { dataDispatch } = useData();
  const videoDetails = findVideo(videoId, videos);
  const addLikeHandler = async (video) => {
    try {
      const {
        data: { likes },
      } = await addLikeToVideos(encodedToken, video);
      dataDispatch({ type: "LIKE_VIDEO", payload: likes });
    } catch (error) {
      if (error.request.status === 500) {
        navigate("/login");
      }
      console.log(error.message);
    }
  };
  const isLiked = findVideo(videoId, likes) ? true : false;
  const removeLikeHandler = async (videoId) => {
    const {
      data: { likes },
    } = await removeLikeFromVideo(encodedToken, videoId);
    dataDispatch({ type: "REMOVE_LIKE", payload: likes });
  };
  return (
    <div className="single-page-wrapper">
      <iframe
        width="100%"
        height="80%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <div className="video-info">
        <div className="video-title">{videoDetails?.title} </div>
        <div className="video-details-wrapper">
          <div className="video-creator-details">
            <span>{videoDetails?.creator} ●</span>
            <span>{videoDetails?.published}</span>
          </div>
          <div className="icons-wrapper">
            {isLiked ? (
              <HiThumbUp
                size="2rem"
                className="like-icon"
                onClick={() => removeLikeHandler(videoId)}
              />
            ) : (
              <HiOutlineThumbUp
                size="2rem"
                className="like-icon"
                onClick={() => addLikeHandler(videoDetails)}
              />
            )}
          </div>
        </div>
      </div>

      <p className="video-description">{videoDetails?.description}</p>
    </div>
  );
};

export { SinglePageVideo };
