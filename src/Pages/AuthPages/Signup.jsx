import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-wrapper">
      <div className="signup-wrapper">
        <form className="login-form">
          <div className="login-heading">Signup</div>
          <label className="signup-label" htmlFor="name">
            Full Name
          </label>
          <input
            type="email"
            name="text"
            className="email-feild"
            placeholder="Enter your full name"
            id="name"
          />
          <label className="signup-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="email-feild"
            placeholder="Enter email"
            id="email"
          />
          <label className="signup-label" htmlFor="pwd">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="pwd-feild"
            id="pwd"
            placeholder=" Password"
          />
          <label className="signup-label" htmlFor="c-pwd">
            Confirm Password
          </label>
          <input
            type="password"
            name="password"
            className="pwd-feild"
            id="c-pwd"
          />
          <button className="signup-btn-primary">Signup</button>
        </form>
        <div>
          <p>
            Already a member?{" "}
            <Link to="/login" className="page-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Signup };
