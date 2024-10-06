import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const login =()=>{
      if(!email && !password){
        toast
      }
   }

  return (
    <>
      <div className="background-image">
        <div className="auth-form-div">
          <h1 className="login-heading">Login</h1>

          <form>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>

            <input
              type="text"
              placeholder="Password"
              className="input-box"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>

            <button type="button" className="button">
              Login
            </button>
          </form>

        </div>
        <Link to="./signup" className="text-decoration-none">
        <p className="dont-hv-account-heading" >Dont have an account? <span className="highlight">Signup</span></p>
        </Link>
       
      </div>
    </>
  );
}

export default Login;
