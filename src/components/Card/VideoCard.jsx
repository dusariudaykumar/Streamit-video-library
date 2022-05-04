import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import playImg from "../../asserts/play-img.svg";
import "./VideoCard.css";
import { useState } from "react";
const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { creator, title, views, _id, duration, published } = video;
  const videoClickHandler = () => {
    navigate(`/video/${_id}`);
  };
  return (
    <div className="card-container">
      <div className="img-container" onClick={() => videoClickHandler()}>
        <img
          className="video-img "
          src={`https://i.ytimg.com/vi/${_id}/mqdefault.jpg`}
          alt=""
        />
        <img src={playImg} alt="" className="play-img" />
        <span className="card-time-stamp">{duration}</span>
      </div>
      <div className="card-info-wrapper flex-col">
        <p className="card-discription">{title}</p>
        <div className="video-creator">
          <span>{creator}</span>
          <IoIosCheckmarkCircle size="1.2rem" title="verified" />
        </div>
        <div className="video-details">
          <span className="views-info">{views} views .</span>
          <span className="video-published">
            <FaCalendarAlt size="0.8rem" />
            <span className="time-period">{published}</span>
          </span>
          <div className="video-menu-wrapper">
            <BsThreeDotsVertical
              className="video-menu-icon"
              size="1.2rem"
              onClick={() => setShowModal((prev) => !prev)}
            />
            {showModal && (
              <ul className="video-modal-container">
                <li>
                  <MdOutlineWatchLater size="1.5rem" />
                  <span>Watch Later</span>
                </li>
                <li>
                  <MdPlaylistAdd size="1.5rem" />
                  <span>Add to playlist</span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
