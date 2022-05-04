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
          <NavLink to="/" className="nav-pill">
            <FaHome className="home-icon" size="2rem" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" className="nav-pill">
            <FaRegCompass className="home-icon" size="2rem" />
            <span>Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlist" className="nav-pill">
            <MdOutlineSubscriptions className="home-icon" size="2rem" />
            <span>Playlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/watchlater" className="nav-pill">
            <MdOutlineWatchLater className="home-icon" size="2rem" />
            <span>Watch Later</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/likedvideos" className="nav-pill">
            <BiLike className="home-icon" size="2rem" />
            <span>Liked Videos</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/histroy" className="nav-pill">
            <MdOutlineHistory className="home-icon" size="2rem" />
            <span>Histroy</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export { SideNav };
