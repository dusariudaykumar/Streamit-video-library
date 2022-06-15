import "./VerticalVideoCard.css";
import { BsThreeDotsVertical, RiDeleteBin6Line } from "../../Utils/getIcons";
import playImg from "../../asserts/play-img.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOnClickOutside } from "../../Utils/onClickOutside";

const VerticalVideoCard = ({
  count,
  video,
  removeLikeHandler,
  pathname,
  removeVideoFromWatchLaterHandler,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { creator, title, _id, duration } = video;
  const [showModal, setShowModal] = useState(false);
  const outSideClickCloseModelRef = useOnClickOutside(
    () => setShowModal((prev) => !prev),
    showModal
  );
  const showModelHandler = (e) => {
    e.stopPropagation();
    setShowModal((prev) => !prev);
  };
  const playVideoHandler = (e, _id) => {
    e.stopPropagation();
    navigate(`/video/${_id}`);
  };
  return (
    <div
      className="card-wrapper flex"
      onClick={() => setShowModal(false)}
      ref={outSideClickCloseModelRef}>
      {location.pathname !== pathname && <span>{count}</span>}
      <div
        className="video-main-wrapper flex"
        onClick={(e) => playVideoHandler(e, _id)}>
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
