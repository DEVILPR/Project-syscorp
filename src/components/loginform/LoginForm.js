import React, { useState } from "react";
import "./loginform.css";
import { BrowserRouter, Link } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const LoginForm = () => {
  const [popupStyle, showPopup] = useState("hide");
  const [nam, setNam] = useState();
  const [list, setList] = useState([]);

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => {
      showPopup("hide");
    }, 3000);
  };
  return (
    <BrowserRouter>
      <div className="cover">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setNam(e.target.value)}
        />
        <input type="password" placeholder="password" />

        <div className="login-btn" onClick={popup}>
          Login
        </div>
        <div
          className="login-btn"
          onClick={() => {
            setList((old) => [...old, nam]);
          }}
        >
          Submit
        </div>
        <Link to="/dashboard">Sign up</Link>

        <p className="text">Or login using</p>

        <div className="alt-login">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>

        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      </div>
      <div>
        {list.map((val) => (
          <ul>
            <li>{val}</li>
          </ul>
        ))}
      </div>
    </BrowserRouter>
  );
};

export default LoginForm;
