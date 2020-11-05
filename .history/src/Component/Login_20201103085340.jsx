import React, { useState } from "react";
import loginLogo from "../Logo/amazon_PNG24.png";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";

function Login() {
  const [input, setInput] = useState();
  const [password, setPassword] = useState();
  const login = (e) => {
    e.preventDefault(); /*this stop the refresh*/
    // do the login logic
  };
  const register = (e) => {
    e.preventDefault();
    // do the register logic
  };
  const accountLogin=()=>{
    e.preventDefault();
    alert(`Here is your login infror`)
  }

  return (
    <div className="login">
      <NavLink to="/">
        <img src={loginLogo} className="login_logo" alt="" />
      </NavLink>
      <div className="login_container">
        <h1>Sign in</h1>
        <form className="form_login" onSubmit={accountLogin}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="login_input"
          />
          <h5>Password</h5>
         
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input_password"
          />
          <FaEyeSlash /> 
          <button
            type="submit"
            onDoubleClick={(e) => alert("aasif")}
            className="login_signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in your agree to Amazon condition of Use & Sale. Please see
          our primary notice our Cookies Notice and our interest Based
          Ads-Notice
        </p>
        <button
          type="submit"
          onClick={register}
          className="login_registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
