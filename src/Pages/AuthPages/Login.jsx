import { Link } from "react-router-dom";
import "./Auth.css";
const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="login-wrapper">
        <form className="login-form">
          <div className="login-heading">Login</div>
          <input
            type="email"
            name="email"
            className="email-feild"
            placeholder="Enter email"
          />
          <input
            type="password"
            name="password"
            className="pwd-feild"
            placeholder=" Password"
          />
          <button className="login-btn-primary">Login</button>
          <button className="login-btn-outline">Login as guest user</button>
        </form>
        <div>
          <p className="">
            Don't have an account?{" "}
            <Link to="/signup" className="page-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Login };
