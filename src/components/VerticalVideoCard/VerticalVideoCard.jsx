import "./VerticalVideoCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import playImg from "../../asserts/play-img.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const VerticalVideoCard = ({
  count,
  video,
  removeLikeHandler,
  pathname,
  removeVideoFromWatchLaterHandler,
}) => {
  const location = useLocation();
  const { creator, title, _id, duration } = video;
  const [showModal, setShowModal] = useState(false);
  const showModelHandler = (e) => {
    e.stopPropagation();
    setShowModal((prev) => !prev);
  };
  return (
    <div className="card-wrapper flex" onClick={() => setShowModal(false)}>
      {location.pathname !== pathname && <span>{count}</span>}
      <div className="video-main-wrapper flex">
        <div className="img-wrapper">
          <img
            className="thumbnail"
            src={`https://i.ytimg.com/vi/${_id}/mqdefault.jpg`}
            alt=""
          />
          <img className="play-svg" src={playImg} alt="" />
          <span className="time-stamp">{duration}</span>
        </div>

        <div className="video-info-container flex-col">
          <p>{title}</p>
          <span>{creator}</span>
        </div>
      </div>
      <div className="video-menu-wrapper ">
        <BsThreeDotsVertical
          className="video-menu-icon"
          size="1.2rem"
          onClick={(e) => showModelHandler(e)}
        />
        {showModal && (
          <ul className="video-modal-container liked-menu-wrapper">
            {location.pathname !== pathname ? (
              <li onClick={removeLikeHandler}>
                <RiDeleteBin6Line size="1.5rem" />
                <span>Remove from Liked videos</span>
              </li>
            ) : (
              <li onClick={removeVideoFromWatchLaterHandler}>
                <RiDeleteBin6Line size="1.5rem" />
                <span>Remove from Watch later</span>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export { VerticalVideoCard };
