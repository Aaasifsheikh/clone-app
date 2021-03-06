import React, { useState } from "react";
import loginLogo from "../Logo/amazon_PNG24.png";
import "./Login.css";
import { NavLink, useHistory } from "react-router-dom";

function Login() {
  const [input, setInput] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  const accountLogin = (e) => {
    e.preventDefault(); /*this stop the refresh*/
    // do the login logic
    alert(
      `Your account is successfully login. your login id: ${input} and password: ${password}`
    );

    setInput("");
    setPassword("");
    history.push("/clone-app");
  };
  const register = (e) => {
    e.preventDefault();
    // do the register logic
  };
  const changeValue=()=>{
    setInput
  }

  return (
    <div className="login">
      <NavLink to="/clone-app">
        <img src={loginLogo} className="login_logo" alt="" />
      </NavLink>
      <div className="login_container">
        <h1>Sign in {setInput} </h1>
        <form className="form_login" onSubmit={accountLogin}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={input}
            name="input"
            autoComplete="off"
            onChange={changeValue}
            className="login_input"
            required
          />
          <h5>Password</h5>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input_password"
            required
          />
          <button
            type="submit"
            onClick={accountLogin}
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
