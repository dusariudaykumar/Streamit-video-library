import { PlayListModel, VideoCard } from "../../components";
import { useData, useVideo } from "../../Contexts";
import { filterByCategories } from "../../Utils/filterByCategories";
import { searchVideos } from "../../Utils/searchVideo";
import "./ExplorePage.css";
const ExplorePage = () => {
  const {
    videoDispatch,
    videoState: { categories, videos, categoryName, searchQuerytext },
  } = useVideo();
  const { openPlayListModal } = useData();
  const filteredVideos = filterByCategories(categoryName, videos);
  const searchedVideos = searchVideos(searchQuerytext, filteredVideos);
  return (
    <div>
      <div className="chips-wrapper">
        {categories.map((category) => {
          return (
            <div
              key={category._id}
              className={`chip-box ${
                categoryName === category.categoryName ? "active-chip" : ""
              }`}
              onClick={() =>
                videoDispatch({
                  type: "CATEGORY_TYPE",
                  payload: category.categoryName,
                })
              }>
              {category.categoryName}
            </div>
          );
        })}
      </div>
      <div className="videos-wrapper">
        {searchedVideos.length === 0 ? (
          <p className="p-lg not-found-msg"> No videos found!</p>
        ) : (
          searchedVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })
        )}
      </div>
      {openPlayListModal && (
        <div className="modal-open">
          <PlayListModel />
        </div>
      )}
    </div>
  );
};

export { ExplorePage };
