import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import url from "../../utills/url.js"

const Login = () => {
  const [loginUserInfo, setLoginUserInfo] = useState({});

  const onInputChange = (e) => {
    console.log(e.target.value);
    setLoginUserInfo({ ...loginUserInfo, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(loginUserInfo, "login user info");

    
    try {

      console.log(`${url}/api/auth/login`,"<---- bhai ye url he ");
      const loginUser = await axios.post(
        `${url}/api/auth/login`,
        loginUserInfo
      );
      toast.success("User login successfully");
      console.log("user login successfully ", loginUser);

      localStorage.setItem(
        "loginUserInfo",
        JSON.stringify(loginUser?.data?.data)
      );

      navigate("/");

    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="loginPageContainer">
      <div className="login">
        <div className="loginHeadingConatiner">
          <h1 className="loginHeading">Login in</h1>
        </div>

        <div className="allInputsConatiner">
          <div className="inputContainer">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              onChange={onInputChange}
              type="email"
              id="email"
              placeholder="email"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              onChange={onInputChange}
              type="password"
              id="password"
              placeholder="password"
            />
          </div>
        </div>

        <div className="loginFormFooter">
          <span className="loginFooterWording">
            You have't an account ?
            <Link to="/signup">
              <span className="span"> Sign up </span>
            </Link>
          </span>
          <button onClick={loginHandler} className="loginBtn">
            Login in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
