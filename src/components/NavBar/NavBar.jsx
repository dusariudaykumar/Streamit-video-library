import { BiSearchAlt2, BiBell, BiMenu } from "react-icons/bi";
import logoImg from "../../asserts/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
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

        <div className="avatar-container">
          <img
            className="avatar-sm-size avatar-circle"
            src="https://avatars.githubusercontent.com/u/78147748?v=4"
            alt="avatar"
          />
          <span className="user-name">Uday Kumar</span>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
