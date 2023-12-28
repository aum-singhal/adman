import React from "react";
import "./Login.css";

import galler from "../../assets/login/galler.png";
import adman from "../../assets/login/adman.png";
import sideImg from "../../assets/login/login-side-img.png";


export const Login = ({setLogged}) => {
  return <div className="login flex">
    <div className="left flex-d-col flex-j-spbet">
      <img src={adman} id="adman-logo" alt="logo" />
      
      <div className="login-form text-align-center">
        <div className="font-28 medium-bold">Login to your account</div>

        <div className="form">
          <div className="login-feild email text-align-left">
            <div className="font-18 medium-bold">Email</div>
            <input type="email" name="" id="" placeholder="Enter your email" />
          </div>

          <div className="login-feild password text-align-left">
            <div className="font-18 medium-bold">Password</div>
            <input type="password" name="" id="" placeholder="Enter your password" />
          </div>
        </div>

        <div className="forgot-password">Forgot Password?</div>
        <button onClick={()=>setLogged(true)} type="submit">Login</button>
      </div>

      <div className="medium-bold text-align-center">
        Powered by &nbsp;
        <img src={galler} alt="galler logo" />
      </div>
    </div>
    <div className="right">
      <img src={sideImg} alt="login side view" />
    </div>
  </div>
}