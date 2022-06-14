import { useLocation, useNavigate } from "react-router-dom";
import playImg from "../../asserts/play-img.svg";
import { useState } from "react";
import { findVideo } from "../../Utils/findVideo";
import { useAuth, useData } from "../../Contexts";
import { PlayListModel } from "../PlayListModel/PlayListModel";
import { useOnClickOutside } from "../../Utils/onClickOutside";
import {
  BiBlock,
  BsThreeDotsVertical,
  FaCalendarAlt,
  IoIosCheckmarkCircle,
  MdOutlineWatchLater,
  MdPlaylistAdd,
} from "../../Utils/getIcons";
import "./VideoCard.css";
import {
  addVideoToHistoryService,
  removeVideoFromHistoryService,
} from "../../Services";
import { useToast } from "../../custom-hooks/useToast";

const VideoCard = ({
  video,
  path,
  removeVideoFromPlayListHandler,
  historyPath,
}) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const { showToast } = useToast();
  const videoModelRef = useOnClickOutside(
    () => setShowModal((prev) => !prev),
    showModal
  );
  const {
    dataState: { watchlater },
    removeVideoFromWatchLaterHandler,
    addVideoToWatchLaterHandler,
    dataDispatch,
  } = useData();
  const {
    authState: { encodedToken, isAuth },
  } = useAuth();
  const [openPlayListModal, setOpenPlayListModal] = useState(false);
  const openPlayListModelHandler = () => {
    setOpenPlayListModal(true);
    setShowModal(false);
  };
  const outSideClickCloseModelRef = useOnClickOutside(() =>
    setOpenPlayListModal(false)
  );

  const navigate = useNavigate();
  const { creator, title, views, _id, duration, published } = video;
  const videoClickHandler = () => {
    navigate(`/video/${_id}`);
    if (isAuth) {
      addVideoToHistory();
    }
  };
  const addVideoToHistory = async () => {
    try {
      const {
        data: { history },
      } = await addVideoToHistoryService(encodedToken, video);
      dataDispatch({ type: "SET_HISTORY", payload: history });
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  //
  const removeVideoFromHistory = async (videoId) => {
    try {
      const {
        data: { history },
      } = await removeVideoFromHistoryService(encodedToken, videoId);
      dataDispatch({ type: "SET_HISTORY", payload: history });
      showToast("Removed from history", "success");
    } catch (error) {
      showToast(error.message, error);
    }
  };
  // check whether video in liked list or not
  const isVideoInWatchLater = findVideo(_id, watchlater) ? true : false;

  return (
    <div className="card-container" ref={videoModelRef}>
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
              <ul className="video-modal-container adjust-position">
                {isVideoInWatchLater ? (
                  <li onClick={() => removeVideoFromWatchLaterHandler(_id)}>
                    <MdOutlineWatchLater size="1.5rem" />
                    <span>Remove from Watch later</span>
                  </li>
                ) : (
                  <li onClick={() => addVideoToWatchLaterHandler(video)}>
                    <MdOutlineWatchLater size="1.5rem" />
                    <span>Save to Watch later</span>
                  </li>
                )}
                {location.pathname !== path ? (
                  <li onClick={() => openPlayListModelHandler()}>
                    <MdPlaylistAdd size="1.5rem" />
                    <span>Save to playlist</span>
                  </li>
                ) : (
                  <li onClick={() => removeVideoFromPlayListHandler(_id)}>
                    <MdPlaylistAdd size="1.5rem" />
                    <span>Remove from playlist</span>
                  </li>
                )}
                {location.pathname === historyPath && (
                  <li onClick={() => removeVideoFromHistory(_id)}>
                    <BiBlock size="1.5rem" />
                    <span>Remove from history</span>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
      {openPlayListModal && (
        <div className="modal-open">
          <PlayListModel
            outSideClickCloseModelRef={outSideClickCloseModelRef}
            video={video}
            setOpenPlayListModal={setOpenPlayListModal}
          />
        </div>
      )}
    </div>
  );
};

export { VideoCard };
