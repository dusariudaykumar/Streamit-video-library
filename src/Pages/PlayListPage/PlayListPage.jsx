import { PlayListCard } from "../../components";
import { useAuth, useData } from "../../Contexts";
import { useToast } from "../../custom-hooks/useToast";
import { deletePlaylistService } from "../../Services";
import "./PlayListPage.css";
const PlayListPage = () => {
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
      <h3>All Playlist</h3>
      <hr />
      <div className="playlist-page-wrapper flex">
        {playlist.map((playlist) => (
          <PlayListCard
            key={playlist._id}
            playlist={playlist}
            deletePlaylistHandler={deletePlaylistHandler}
          />
        ))}
      </div>
    </div>
  );
};

export { PlayListPage };
