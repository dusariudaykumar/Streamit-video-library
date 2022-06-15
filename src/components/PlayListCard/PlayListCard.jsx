import "./PlayListCard.css";

import noVideoimg from "../../asserts/no-video.jpg";
import { useNavigate } from "react-router-dom";
import { MdPlaylistAdd, MdDeleteOutline } from "../../Utils/getIcons";
const PlayListCard = ({ playlist, deletePlaylistHandler }) => {
  const navigate = useNavigate();
  const playlistVideoHandler = () => {
    navigate(`/playlist/${_id}`);
  };
  const { _id, title, videos } = playlist;
  return (
    <div className="playlist-box">
      <div
        className="playlist-img-wrapper"
        onClick={() => playlistVideoHandler()}>
        <img
          className="playlist-banner"
          src={
            videos.length !== 0
              ? `https://i.ytimg.com/vi/${videos[0]._id}/mqdefault.jpg`
              : noVideoimg
          }
          alt="video-thumbnail"
        />
        <div className="video-count flex-col">
          <span>{videos.length}</span>
          <MdPlaylistAdd size="1.9rem" />
        </div>
      </div>
      <div className="playlist-box-footer flex">
        <p className="ellipsis-text">{title}</p>
        <MdDeleteOutline
          onClick={() => deletePlaylistHandler(_id)}
          className="delete-icon"
          size="2rem"
        />
      </div>
    </div>
  );
};

export { PlayListCard };
