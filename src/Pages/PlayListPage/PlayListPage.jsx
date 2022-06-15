import { useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { PlayListCard, PlayListModel } from "../../components";
import { useAuth, useData } from "../../Contexts";
import { useToast } from "../../custom-hooks/useToast";
import { deletePlaylistService } from "../../Services";
import { useOnClickOutside } from "../../Utils/onClickOutside";
import "./PlayListPage.css";
const PlayListPage = () => {
  const location = useLocation();
  const [openPlayListModal, setOpenPlayListModal] = useState(false);
  const outSideClickCloseModelRef = useOnClickOutside(() =>
    setOpenPlayListModal(false)
  );

  const {
    dataState: { playlist },
    dataDispatch,
  } = useData();
  const {
    authState: { encodedToken },
  } = useAuth();
  const { showToast } = useToast();
  const deletePlaylistHandler = async (playlistId) => {
    try {
      const {
        data: { playlists },
      } = await deletePlaylistService(encodedToken, playlistId);
      dataDispatch({ type: "DELETE_PLAYLIST", payload: playlists });
      showToast("PlayList deleted successfully", "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  return (
    <div className="pages-wrapper">
      <div className="page-header-container">
        <h3>All Playlist</h3>
        <button
          className="page-header-btn"
          onClick={() => setOpenPlayListModal((prev) => !prev)}>
          Create Playlist <MdPlaylistAdd size="1.5rem" />
        </button>
      </div>
      <hr />
      {playlist.length === 0 ? (
        <div className="empty-placeholder-container">
          <h5>You've no Playlists</h5>
        </div>
      ) : (
        <div className="playlist-page-wrapper flex">
          {playlist.map((playlist) => (
            <PlayListCard
              key={playlist._id}
              playlist={playlist}
              deletePlaylistHandler={deletePlaylistHandler}
            />
          ))}
        </div>
      )}
      {openPlayListModal && (
        <div className="modal-open">
          <PlayListModel
            setOpenPlayListModal={setOpenPlayListModal}
            outSideClickCloseModelRef={outSideClickCloseModelRef}
            path={location.pathname}
          />
        </div>
      )}
    </div>
  );
};

export { PlayListPage };
