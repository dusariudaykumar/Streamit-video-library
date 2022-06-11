import "./PlayListModel.css";
import { MdClose, MdOutlineAdd } from "../../Utils/getIcons";
import { useState } from "react";
import { useToast } from "../../custom-hooks/useToast";
import { useAuth, useData } from "../../Contexts";
import { useNavigate } from "react-router-dom";
import { findVideoInPlaylist } from "../../Utils/findVideoInPlaylist";
import {
  addToPlaytlistService,
  createNewPlaylistService,
} from "../../Services";

const PlayListModel = ({
  video,
  setOpenPlayListModal,
  outSideClickCloseModelRef,
}) => {
  const navigate = useNavigate();
  const {
    authState: { encodedToken },
  } = useAuth();

  const {
    dataDispatch,
    dataState: { playlist },
  } = useData();
  const { showToast } = useToast();
  const [openCreateNewPlayList, setOpenCreateNewPlayList] = useState(false);
  const [playlistTilte, setPlaylistTilte] = useState("");

  const createPlaylistHandler = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { playlists },
      } = await createNewPlaylistService(encodedToken, playlistTilte);
      dataDispatch({ type: "CREATE_PLAYLIST", payload: playlists });
      setPlaylistTilte("");
      showToast("New playlist created", "success");
    } catch (error) {
      if (error.request.status === 500) {
        navigate("/login");
      }
      console.log(error.message);
    }
  };
  const addVideoToPlaylistHandler = async (playlistId) => {
    try {
      const {
        data: { playlist },
      } = await addToPlaytlistService(encodedToken, playlistId, video);
      dataDispatch({ type: "SET_VIDEO_TO_PLAYLIST", payload: playlist });
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return (
    <div className="playlist-modal-wrapper" ref={outSideClickCloseModelRef}>
      <div className="modal-header flex">
        <p>Add to Playlist</p>
        <MdClose
          className="close-icon"
          size="1.5rem"
          onClick={() => setOpenPlayListModal(false)}
        />
      </div>

      <div className="playlist-items flex-col">
        {playlist.map(({ _id, title, videos }) => (
          <label htmlFor={_id} key={_id}>
            <input
              onChange={() => addVideoToPlaylistHandler(_id)}
              type="checkbox"
              id={_id}
              value={title}
              checked={Boolean(findVideoInPlaylist(video._id, videos))}
              className="playlist-check-box"
            />
            {title}
          </label>
        ))}
      </div>
      <div className="modal-footer">
        {!openCreateNewPlayList ? (
          <button
            className="create-playlist-btn flex"
            onClick={() => setOpenCreateNewPlayList(true)}>
            <MdOutlineAdd size="1.6rem" />
            <span>Create New Playlist</span>
          </button>
        ) : (
          <form className="modal-form-container flex-col">
            <input
              type="text"
              className="new-playlist-feild"
              placeholder="Type here..."
              value={playlistTilte}
              onChange={(e) => setPlaylistTilte(e.target.value)}
            />
            <div className="form-btns-wrapper flex">
              <button
                className=" btn btn-cancel"
                onClick={() => setOpenCreateNewPlayList(false)}>
                Cancel
              </button>
              <button
                className=" btn btn-solid"
                onClick={(e) => createPlaylistHandler(e)}>
                Create
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export { PlayListModel };
