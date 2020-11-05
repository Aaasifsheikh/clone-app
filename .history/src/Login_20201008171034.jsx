import React from "react";
import loginLogo from "./Logo/amazon_PNG24.png";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
    const login =e=>{
        e.preventDefault(); /*this stop the refresh*/
        // do the login logic
    }
    const register =e=>{
        e.preventDefault();
        // do the register logic
    }

  return (
    <div className="login">
      <NavLink to="/">
        <img src={loginLogo} className="login_logo" alt="" />
      </NavLink>
      <div className="login_container">
        <h1>Sign in</h1>
        <form className="form_login">
          <h5>E-mail</h5>
          <input type="text" className="login_input" />
          <h5>Password</h5>
          <input type="password" value={submit} className="input_password" />
          <button type="submit"  onClick={login} onChange={e=>{
            e..value
          }} className="login_signInButton">Sign In</button>
        </form>
        <p>
          By signing in your agree to Amazon condition of Use & Sale. Please see
          our primary notice our Cookies Notice and our interest Based
          Ads-Notice
        </p>
        <button type="submit" onClick={register} className="login_registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
