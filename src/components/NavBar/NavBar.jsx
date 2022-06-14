import logoImg from "../../asserts/logo.png";
import {
  BiBell,
  BiLogInCircle,
  BiLogOutCircle,
  BiMenu,
  BiSearchAlt2,
  CgProfile,
} from "../../Utils/getIcons";
import userAvatar from "../../asserts/user.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useAuth, useData, useVideo } from "../../Contexts";
import { useState } from "react";
import { useOnClickOutside } from "../../Utils/onClickOutside";
const NavBar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { videoDispatch } = useVideo();
  const outSideClickCloseModelRef = useOnClickOutside(() =>
    setShowUserMenu(false)
  );

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const {
    authState: { isAuth, userData },
  } = useAuth();
  const {
    dataState: { likes },
    dataDispatch,
  } = useData();
  const logoutHandler = () => {
    localStorage.clear();
    navigate(0);
  };

  const searchClickHandler = () => {
    videoDispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  return (
    <nav className="navigation-container flex">
      <div className="nav-left-wrapper flex">
        <BiMenu
          className="menu-btn"
          size="2rem"
          onClick={() => dataDispatch({ type: "TOGGLE_MENU" })}
        />
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logoImg} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="search-container">
        <input
          type="search"
          className="search-feild"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <BiSearchAlt2
          className="search-icon"
          size="2rem"
          onClick={searchClickHandler}
        />
      </div>
      <div className="nav-right-wrapper flex" ref={outSideClickCloseModelRef}>
        <div className="badge-container">
          <BiBell className="notification-icon" size="2rem" />
          <span className="icon-badge-count bell-icon">{likes.length}</span>
        </div>
        {isAuth ? (
          <div className="avatar-container">
            <div
              className="user-container"
              onClick={() => setShowUserMenu((prev) => !prev)}>
              <img
                className="avatar-sm-size avatar-circle"
                src={userAvatar}
                alt="avatar"
              />
              <span className="user-name">{userData.fullName}</span>
            </div>
            {showUserMenu && (
              <div className="user-dropdown-menu">
                <ul className="menu-bar">
                  <li className="user-menu-item">
                    <CgProfile className="profile-icon" size="1.6rem" />
                    <span>Profile</span>
                  </li>
                  <li className="user-menu-item" onClick={logoutHandler}>
                    <BiLogOutCircle className="logout-icon" size="1.6rem" />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-container">
            <BiLogInCircle size="1.7rem" className="login-icon" />
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { NavBar };
