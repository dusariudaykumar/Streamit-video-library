import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Contexts";
import "./Auth.css";
import axios from "axios";
import { useToast } from "../../custom-hooks/useToast";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const { authDispatch } = useAuth();
  const { showToast } = useToast();
  const [userData, setUserData] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { email, password } = userData;
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      const { encodedToken, foundUser } = response.data;
      if (encodedToken) {
        let from = location.state?.from || "/";
        authDispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("userData", JSON.stringify(foundUser));
        navigate(from, { replace: true });
        showToast("Login Success", "success");
      } else {
        navigate("/login");
      }
      setUserData(initialState);
    } catch (error) {
      showToast(error.response.data.errors[0], "error");
    }
  };
  const guestUser = (e) => {
    e.preventDefault();
    setUserData({
      email: "udaykumar@gmail.com",
      password: "password@123",
    });
  };

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
            required
            value={email}
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="password"
            name="password"
            className="pwd-feild"
            placeholder=" Password"
            required
            value={password}
            onChange={(e) => changeHandler(e)}
          />
          <button
            className="login-btn-primary"
            onClick={(e) => loginHandler(e)}>
            Login
          </button>
          <button className="login-btn-outline" onClick={(e) => guestUser(e)}>
            Login as guest user
          </button>
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
