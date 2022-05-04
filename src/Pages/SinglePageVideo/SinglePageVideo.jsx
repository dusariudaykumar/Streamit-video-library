import { useParams } from "react-router-dom";
import { BiLike, BiDislike } from "react-icons/bi";
import { useVideo } from "../../Contexts/video-context";
import "./SinglePageVideo.css";
const SinglePageVideo = () => {
  const { videoId } = useParams();
  const {
    videoState: { videos },
  } = useVideo();

  const videoDetails = videos.find((video) => video._id === videoId);

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
            <span>{videoDetails?.creator} .</span>
            <span>{videoDetails?.published}</span>
          </div>
          <div className="icons-wrapper">
            <BiLike size="2rem" className="like-icon" />
            <BiDislike size="2rem" className="dislike-icon" />
          </div>
        </div>
      </div>

      <p className="video-description">{videoDetails?.description}</p>
    </div>
  );
};

export { SinglePageVideo };
