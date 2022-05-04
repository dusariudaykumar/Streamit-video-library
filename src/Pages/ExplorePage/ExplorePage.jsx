import { VideoCard } from "../../components";
import { useVideo } from "../../Contexts";
import { filterByCategories } from "../../Utils/filterByCategories";
import "./ExplorePage.css";
const ExplorePage = () => {
  const {
    videoDispatch,
    videoState: { categories, videos, categoryName },
  } = useVideo();

  const filteredVideos = filterByCategories(categoryName, videos);
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
        {filteredVideos.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </div>
  );
};

export { ExplorePage };
