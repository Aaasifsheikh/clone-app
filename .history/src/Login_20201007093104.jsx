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
    <label for ="password">Password</label>
    <input type ="password" className="input_password" />
    <button type>Submit</button>
    <button>Create an account</button>

      </form>
    </div>
  );
}

export default Login;
