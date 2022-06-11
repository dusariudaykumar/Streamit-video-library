import { useParams } from "react-router-dom";
import { VideoCard } from "../../components";
import { useAuth, useData } from "../../Contexts";
import { useToast } from "../../custom-hooks/useToast";
import { removeVideoFromPlaylist } from "../../Services";
import { findVideo } from "../../Utils/findVideo";

const SinglePlayList = () => {
  const { playlistId } = useParams();
  const {
    authState: { encodedToken },
  } = useAuth();
  const { showToast } = useToast();
  const {
    dataState: { playlist },
    dataDispatch,
  } = useData();
  const playlistData = findVideo(playlistId, playlist);
  const removeVideoFromPlayListHandler = async (videoId) => {
    try {
      const {
        data: { playlist },
      } = await removeVideoFromPlaylist(encodedToken, playlistId, videoId);
      dataDispatch({ type: "SET_VIDEO_TO_PLAYLIST", payload: playlist });
      showToast("Video removed from playlist", "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };
  return (
    <div className="pages-wrapper">
      <h3>
        {playlistData.title} <span>({playlistData.videos.length})</span>
      </h3>
      <hr />
      <div className="single-playlist-page-wrapper">
        {playlistData.videos?.map((video) => (
          <VideoCard
            key={video._id}
            video={video}
            path={`/playlist/${playlistId}`}
            removeVideoFromPlayListHandler={removeVideoFromPlayListHandler}
          />
        ))}
      </div>
    </div>
  );
};

export { SinglePlayList };
