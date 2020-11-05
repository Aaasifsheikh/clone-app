import React from "react";
import loginLogo from "./Logo/amazon_PNG24.png";
import './Login.css';

function Login() {
  return (
    <div className="login">
      <img src={loginLogo} className="login_logo" alt="" />
      <form>
    <label for="Email">E-mail</label>
    <input type="text" className="login_input" />
    <lable for ="password"

      </form>
    </div>
  );
}

export default Login;
