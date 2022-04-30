import { IoIosCheckmarkCircle } from "react-icons/io";
import "./VideoCard.css";
const VideoCard = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img
          className="video-img responsive-img"
          src="http://img.youtube.com/vi/DGVXFkFUhgc/mqdefault.jpg"
          alt=""
        />
        <span className="card-time-stamp">3:50</span>
      </div>
      <div className="card-info-wrapper flex-col">
        <p className="card-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          explicabo perspiciatis molestias tempora quo id sapiente quas.
        </p>
        <div className="video-creator">
          <span>Wild4Games</span>
          <IoIosCheckmarkCircle size="1.2rem" title="verified" />
        </div>
        <div className="video-details">
          <span className="views-info">21K views </span>
          <span className="time-period">1 year ago</span>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
