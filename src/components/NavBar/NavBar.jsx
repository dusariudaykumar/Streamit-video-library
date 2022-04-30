import {
  BiSearchAlt2,
  BiBell,
  BiMenu,
  BiLogOutCircle,
  BiLogInCircle,
} from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import logoImg from "../../asserts/logo.png";
import userAvatar from "../../asserts/user.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../../Contexts";
import { useState } from "react";
const NavBar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const {
    authState: { isAuth, userData },
  } = useAuth();
  console.log(userData);
  const logoutHandler = () => {
    localStorage.clear();
    navigate(0);
  };
  return (
    <nav className="navigation-container flex">
      <div className="nav-left-wrapper flex">
        <BiMenu className="menu-btn" size="2rem" />
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logoImg} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="search-container">
        <input type="search" className="search-feild" placeholder="Search" />
        <BiSearchAlt2 className="search-icon" size="2rem" />
      </div>
      <div className="nav-right-wrapper flex">
        <div className="badge-container">
          <BiBell className="notification-icon" size="2rem" />
          <span className="icon-badge-count bell-icon">2</span>
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
                  <li className="user-menu-item">
                    <BiLogOutCircle className="logout-icon" size="1.6rem" />
                    <span onClick={logoutHandler}>Logout</span>
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
