import { NavLink } from "react-router-dom";
import { FaHome, FaRegCompass } from "react-icons/fa";
import {
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdOutlineHistory,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";
import "./SideNav.css";
const SideNav = () => {
  return (
    <aside className="side-nav">
      <ul className="nav-items">
        <li>
          <NavLink to="/">
            <div className="nav-pill">
              <FaHome className="home-icon" size="2rem" color="white" />
              <span>Home</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <div className="nav-pill">
              <FaRegCompass className="home-icon" size="2rem" color="white" />
              <span>Explore</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <div className="nav-pill">
              <MdOutlineSubscriptions
                className="home-icon"
                size="2rem"
                color="white"
              />
              <span>Playlist</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <div className="nav-pill">
              <MdOutlineWatchLater
                className="home-icon"
                size="2rem"
                color="white"
              />
              <span>Watch Later</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <div className="nav-pill">
              <BiLike className="home-icon" size="2rem" color="white" />
              <span>Liked Videos</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <div className="nav-pill">
              <MdOutlineHistory
                className="home-icon"
                size="2rem"
                color="white"
              />
              <span>Histroy</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export { SideNav };
