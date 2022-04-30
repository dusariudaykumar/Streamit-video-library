import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Contexts";
import axios from "axios";
import { useToast } from "../../custom-hooks/useToast";
const initialState = {
  fullName: "",
  email: "",
  password: "",
};
const Signup = () => {
  const { showToast } = useToast();
  const { authDispatch } = useAuth();
  const [userData, setUserData] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  const { fullName, email, password } = userData;
  const signupChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        fullName,
      });
      const { encodedToken, createdUser } = response.data;
      if (encodedToken) {
        let from = location.state?.from || "/";
        authDispatch({ type: "SIGNUP_SUCCESS", payload: response.data });
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("userData", JSON.stringify(createdUser));
        showToast("Account created successfully ", "success");
        navigate(from, { replace: true });
      } else {
        navigate("/signup");
      }
    } catch (error) {
      showToast(error.response.data.errors[0], "error");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="signup-wrapper">
        <form className="login-form" onSubmit={(e) => signupHandler(e)}>
          <div className="login-heading">Signup</div>
          <label className="signup-label" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            className="email-feild"
            placeholder="Enter your full name"
            id="name"
            value={fullName}
            onChange={(e) => signupChangeHandler(e)}
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
            value={email}
            onChange={(e) => signupChangeHandler(e)}
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
            value={password}
            onChange={(e) => signupChangeHandler(e)}
          />
          <label className="signup-label" htmlFor="c-pwd">
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
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
