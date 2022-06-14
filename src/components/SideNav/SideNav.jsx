import { NavLink } from "react-router-dom";
import { FaHome, FaRegCompass } from "react-icons/fa";
import {
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdOutlineHistory,
} from "../../Utils/getIcons";
import { BiLike } from "react-icons/bi";
import "./SideNav.css";
import { useData } from "../../Contexts";
const SideNav = () => {
  const {
    dataState: { hideMenu },
  } = useData();
  return (
    <aside
      className={hideMenu ? `side-nav toggle-width` : `side-nav expanded-menu`}>
      <ul className="nav-items">
        <li>
          <NavLink to="/" className={hideMenu ? `toggle-menu` : `nav-pill`}>
            <FaHome className="home-icon" size="2rem" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={hideMenu ? `toggle-menu` : `nav-pill`}>
            <FaRegCompass className="home-icon" size="2rem" />
            <span>Explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlist"
            className={hideMenu ? `toggle-menu` : `nav-pill`}>
            <MdOutlineSubscriptions className="home-icon" size="2rem" />
            <span>Playlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watchlater"
            className={hideMenu ? `toggle-menu` : `nav-pill`}>
            <MdOutlineWatchLater className="home-icon" size="2rem" />
            <span>Watch Later</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/likes"
            className={hideMenu ? `toggle-menu` : `nav-pill`}>
            <BiLike className="home-icon" size="2rem" />
            <span>Liked Videos</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={hideMenu ? `toggle-menu` : `nav-pill`}>
            <MdOutlineHistory className="home-icon" size="2rem" />
            <span>Histroy</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export { SideNav };
