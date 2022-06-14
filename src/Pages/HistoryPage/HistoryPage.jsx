import { VideoCard } from "../../components";
import { MdDeleteOutline, MdPlaylistAdd } from "../../Utils/getIcons";
import { useAuth, useData } from "../../Contexts";
import "./HistoryPage.css";
import { clearAllHistoryService } from "../../Services";
import { useToast } from "../../custom-hooks/useToast";
import { useLocation } from "react-router-dom";
const HistoryPage = () => {
  const location = useLocation();
  const { showToast } = useToast();
  const {
    dataState: { history },
    dataDispatch,
  } = useData();
  const count = history.length;
  const {
    authState: { encodedToken },
  } = useAuth();
  // Clear entire history
  const clearEntireHistoryHandler = async () => {
    try {
      const {
        data: { history },
      } = await clearAllHistoryService(encodedToken);
      dataDispatch({ type: "SET_HISTORY", payload: history });
      showToast("History cleared", "success");
    } catch (error) {
      showToast(error.message, "error");
    }
  };
  return (
    <div className="pages-wrapper">
      <div className="page-header-container">
        <h3>
          History
          {count !== 0 && (
            <span>{count > 1 ? `${count} videos` : `${count} video`}</span>
          )}
        </h3>
        <button
          className="page-header-btn"
          onClick={() => clearEntireHistoryHandler()}>
          Clear History <MdDeleteOutline size={25} />
        </button>
      </div>
      <hr />
      {count === 0 ? (
        <div className="empty-placeholder-container">
          <h5>History is empty</h5>
        </div>
      ) : (
        <div className="history-page-wrapper">
          {history.map((video) => (
            <VideoCard
              key={video._id}
              video={video}
              historyPath={location.pathname}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { HistoryPage };
