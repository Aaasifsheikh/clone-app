import React from "react";
import loginLogo from "./Logo/amazon_PNG24.png";
import './Login.css';

function Login() {
  return (
    <div className="login">
      <img src={loginLogo} className="login_logo" alt="" />
      <form>
      <h1>Sign in</h1>
    <label for="Email">E-mail</label>
    <input type="text" className="login_input" />
    <label for ="password">Password</label>
    <input type ="password" className="input_password" />
    <button type="submit">Sign In</button>
    <p>By signing in your agree to Amazon condition of Use & Sale.Please see our primary notice our Cookies Notice and our interest based Ads-noticed</p>
    <button type="submit">Create your Amazon Account</button>

      </form>
    </div>
  );
}

export default Login;
