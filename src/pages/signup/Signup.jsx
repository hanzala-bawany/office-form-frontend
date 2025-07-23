import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';


const Signup = () => {

  const [signupUserInfo, setSignupUserInfo] = useState({})

  const onInputChange = (e) => {
    console.log(e.target.value);
    setSignupUserInfo({ ...signupUserInfo, [e.target.id]: e.target.value })
  }

  const navigate = useNavigate()
  const onSignupHandler = async (e) => {

    e.preventDefault()
    console.log(signupUserInfo, "user info");
    try {
      const signupUser = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, signupUserInfo)
      toast.success("User register successfully");
      console.log("user signUp successfully ", signupUser);
      navigate("/emailVerification" , {
        state  : signupUser?.data?.data
      }
      )          
    }
    catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }

  }


  return (
    <div className="sigupPageContainer">

      <div className="signUp">
        <div className="signupHeadingConatiner">
          <h1 className="sigUpHeading">Sign Up</h1>
          <span className="headingWording">
            Already have an account ?  <Link to="/login" > <span className="span"> Sign in </span> </Link>
          </span>
        </div>

        <div className="allInputsConatiner">
          <div className="inputContainer">
            <label htmlFor="userName" className="label">
              User Name
            </label>
            <input onChange={onInputChange} type="text" id="userName" placeholder="userName" />
          </div>

          <div className="inputContainer">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input onChange={onInputChange} type="email" id="email" placeholder="email" />
          </div>

          <div className="inputContainer">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input onChange={onInputChange} type="password" id="password" placeholder="password" />
          </div>

          <div className="inputContainer">
            <label htmlFor="age" className="label">
              Age
            </label>
            <input onChange={onInputChange} type="number" id="age" placeholder="age" />
          </div>

          <div className="checkBoxContainer">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
              I do not want to recieve emails with advertising , news
              ,suggestionjs or marketing promotion
            </label>
          </div>
        </div>

        <div className="formFooter">
          <button onClick={onSignupHandler} className="submitBtn">Sign Up</button>
          <div className="footerText">
            By using up yo create an acount yo are acceptin our terms of service
            and privacy policy
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
